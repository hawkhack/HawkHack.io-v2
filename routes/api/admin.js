const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const wrap = require("../../middleware/asyncWrapper");

const getDefaults = require("../../config/defaults");
const mailbody = require("../../utils/mailbody");

const User = require("../../models/User");
const Profile = require("../../models/Profile");
const List = require("../../models/List");

const verifyRole = require("../../middleware/verifyRole");

router.get(
  "/stats",
  passport.authenticate("jwt", { session: false }),
  verifyRole("Director", "Administrator"),
  wrap(async (req, res, next) => {
    try {
      const users = await User.aggregate([{$group:{_id: "$role", count :{$sum: 1} }}]);
      const profiles = await Profile.aggregate([{$group:{_id: "$status", count :{$sum: 1} }}]);
      const data = {
        users,profiles
      }
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  })
);

router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  verifyRole("Director", "Administrator"),
  wrap(async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  })
);

router.get(
  "/users/:email",
  passport.authenticate("jwt", { session: false }),
  verifyRole("Director", "Administrator"),
  wrap(async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.params.email });
      if (!user) {
        return res.status(404).json("user not found");
      }
      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  })
);

router.get(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  verifyRole("Director", "Administrator"),
  wrap(async (req, res, next) => {
    try {
      const profiles = await Profile.find();
      res.status(200).json(profiles);
    } catch (err) {
      next(err);
    }
  })
);

router.get(
  "/profiles/:email",
  passport.authenticate("jwt", { session: false }),
  verifyRole("Director", "Administrator"),
  wrap(async (req, res, next) => {
    try {
      const profile = await Profile.findOne({ email: req.params.email });
      if (!profile) {
        return res.status(404).json("user profile not found");
      }
      res.status(200).json(profile);
    } catch (err) {
      next(err);
    }
  })
);

router.get(
  "/signin",
  passport.authenticate("jwt", { session: false }),
  verifyRole("Director", "Administrator"),
  wrap(async (req, res, next) => {
    try {
      const list = await List.findOne({ name: "signin" });
      return res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  })
);

router.put(
  "/signin/:email",
  passport.authenticate("jwt", { session: false }),
  verifyRole("Volunteer", "Organizer", "Director", "Administrator"),
  wrap(async (req, res, next) => {
    const errors = {};
    try {
      //find user
      const user = await User.findOne({ email: req.params.email });
      //check exists
      if (!user) {
        errors.nouser = "No user found";
        return req.status(400).json(errors);
      }
      //check verified
      if (!user.verified) {
        errors.verified = "user no verified";
      }
      //find profile
      const profile = await Profile.findOne({ user: user.id });
      //check if incomplete or denied, deny signin
      if (!profile.status === "Incomplete" || profile.status === "Denied") {
        errors.noentry = `Profile is ${profile.status}`;
        return res.status(412).json(errors);
      }
      //add to signin list
      const list = await List.findOne({ name: "signin" });
      list.users.push(user.id);
      list.count++;
      const saveList = await list.save();
      return res
        .status(200)
        .json({ message: "user signed in", total: saveList.users.length });
    } catch (err) {
      next(err);
    }
  })
);

router.post(
  "/accept",
  passport.authenticate("jwt", { session: false }),
  verifyRole("Administrator", "Director"),
  wrap(async (req, res, next) => {
    try {
      const defaults = getDefaults();
      const errors = {};
      //uid: user id
      //status: whether the user is Accepted or Denied
      //force: flag used as backup to force accept a user in case someting goes wrong
      const { uid, status, force } = req.body;

      //find user
      const profile = await Profile.findOne({ user: uid });
      //check if profile exists
      if (!profile) {
        errors.profile = `profile with user ${profile.email} not found`;
        console.log(`ADMIN ERROR: ${errors}`);
        return res.status(400).json(errors);
      }

      //if user is accepted and his current status is "Registered" meaning his application is completed OR force flag is on, set status to "ACCEPTED", save and send response
      if (status === "Accepted") {
        if (profile.status === "Registered" || force) {
          profile.statusChangedAt = new Date();
          profile.status = status;
          profile.confirmationToken = uid(32);
          await profile.save();
          console.log(`USER ACCEPTED: ${profile.email}`);

          //send confirmation email
          const data = mailbody.confirmation(
            profile.email,
            profile.firstName,
            profile.confirmationToken
          );
          mailgun.messages().send(data, (err, body) => {
            if (err) {
              console.log("mailgun error: ", err);
              return res.status(500).json("error");
            }
            console.log(`Confirmation email sent to ${data.to}`);
            return res
              .status(200)
              .json(
                `User ${profile.email} accepted. Email sent to ${profile.email}`
              );
          });
        }
      }
      //if user is denied, set status to denied, save, and send response
      if (status === "Denied") {
        profile.status = status;
        const savedProfile = await profile.save();

        console.log(`USER DENIED: ${savedProfile.email}`);
        return res.status(200).json(`user ${savedProfile.email} denied`);
      }
      //if invalid status or something else didn't go through, cry about it.
      console.log(
        `ACCEPT ERROR:\nuid: ${uid}\nstatus:${status}\nforce${force}`
      );
      res.status(400).json("something went wrong");
    } catch (err) {
      next(err);
    }
  })
);

router.get(
  "/dbcreatedefault",
  passport.authenticate("jwt", { session: false }),
  verifyRole("Administrator"),
  (req, res) => {
    User.findOne({ email: "test@example.com" }).then(user => {
      if (user) {
        return res.status(400).json("default user exists");
      } else {
        const newUser = new User({
          email: "test@example.com",
          password: "123456",
          role: "Administrator"
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
              const profileFields = {};
              profileFields.user = user.id;
              profileFields.email = user.email;
              profileFields.status = "Complete";
              profileFields.firstName = "Firstname";
              profileFields.lastName = "Lastname";
              profileFields.phoneNumber = "5555555555";
              profileFields.dateOfBirth = "01/01/1990";
              profileFields.shirtSize = "M";
              profileFields.gender = "Male";
              profileFields.ethnicity = "American";
              profileFields.github = "https://github.com/hawkhack";
              profileFields.linkedin =
                "https://www.linkedin.com/company/hawkhack-spring-2019/about/";
              profileFields.website = "http://www.hawkhack.io";
              profileFields.school = "Montclair State University";
              profileFields.graduationYear = "2020";
              profileFields.levelOfStudy = "Undergraduate";
              profileFields.major = "Computer Science";
              profileFields.dietaryRestrictions = "Dietary Restriction test";
              profileFields.specialNeeds = "Speecial Needs test";

              Profile.findOne({ user: user.id })
                .then(profile => {
                  if (profile) {
                    //Update
                    Profile.findOneAndUpdate(
                      { user: user.id },
                      { $set: profileFields },
                      { new: true }
                    ).then(profile => res.json(profile));
                  } else {
                    new Profile(profileFields)
                      .save()
                      .then(profile => res.json(profile));
                  }
                })
                .catch(err => console.log(err));
            });
          });
        });
      }
    });
  }
);

module.exports = router;
