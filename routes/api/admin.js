const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const Profile = require("../../models/Profile");
const Event = require("../../models/Event");
const List = require("../../models/List");

router.get("/stats", (req, res) => {
  let response = {};
  User.countDocuments()
    .then(result => {
      response.numusers = result;
    })
    .then(() => {
      User.countDocuments({ status: "Registered" })
        .then(result => {
          response.numregistered = result;
        })
        .then(() => {
          User.countDocuments({ role: "Participant" })
            .then(result => {
              response.numparticipants = result;
            })
            .then(() => {
              res.status(200).json(response);
            });
        });
    });
});

router.get("/users", (req, res) => {
  User.find().then(users => {
    res.status(200).json(users);
  });
});

router.get("/users/:email", (req, res) => {
  User.findOne({ email: req.params.email }).then(user => {
    if (!user) {
      return res.status(404).json("user not found");
    }
    res.status(200).json(user);
  });
});

router.get("/profiles", (req, res) => {
  Profile.find().then(profiles => {
    res.status(200).json(profiles);
  });
});

router.get("/profiles/:email", (req, res) => {
  Profile.findOne({ email: req.params.email }).then(profile => {
    if (!profile) {
      return res.status(404).json("user profile not found");
    }
    res.status(200).json(profile);
  });
});

router.get("/signin", (req, res) => {
  List.findOne({ name: "signin" }).then(list => {
    res.status(200).json(list);
  });
});

router.put("/signin/:email", (req, res) => {
  User.findOne({ email: req.params.email }).then(user => {
    if (!user) {
      return req.status(400).json("user does not exist");
    }
    List.findOne({ name: "signin" }).then(list => {
      list.users.push(user.id);
    });
  });

  List.findOne({ name: "signin" }).then(list => {
    list.users.push({ user: user.id });
    list.save().then(() => {
      res.status(200).json("user signed in");
    });
  });
});

router.get("/dbcreatedefault", (req, res) => {
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
});

module.exports = router;
