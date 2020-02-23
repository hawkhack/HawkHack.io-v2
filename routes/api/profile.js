const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrap = require("../../middleware/asyncWrapper");
const uploadFile = require("../../middleware/upload-file");
const deleteResume = require("../../utils/deleteResume");

//load middleware
const verify = require("../../middleware/verifyActive");

//Load validation
const validateProfileInput = require("../../validation/profile");

//Load profile model
const Profile = require("../../models/Profile");
//Load user model
const User = require("../../models/User");

//  @route  GET api/p/test
//  @desc   Test profile route
//  @access Public
router.post("/test", (req, res) => {
  res.json(req.body);
});

//  @route  GET api/p/
//  @desc   Get current user profile
//  @access Private
router.get("/", passport.authenticate("jwt", { session: false }), verify(), (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.user.id })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        return res.status(404).json(errors);
      }
      return res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

//  @route  POST api/p/
//  @desc   Create user profile
//  @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  verify(),
  wrap(async (req, res, next) => {
    const { errors, isValid, isComplete } = validateProfileInput(req.body);
    //check validation
    if (!isValid) {
      //return any erros with 400 status
      return res.status(400).json(errors);
    }
    const profileFields = {
      user: req.user.id,
      email: req.user.email
    };
    if (req.body.firstName) profileFields.firstName = req.body.firstName;
    if (req.body.lastName) profileFields.lastName = req.body.lastName;
    if (req.body.phoneNumber) profileFields.phoneNumber = req.body.phoneNumber;
    if (req.body.dateOfBirth) profileFields.dateOfBirth = req.body.dateOfBirth;
    if (req.body.shirtSize) profileFields.shirtSize = req.body.shirtSize;
    if (req.body.gender) profileFields.gender = req.body.gender;
    if (req.body.ethnicity) profileFields.ethnicity = req.body.ethnicity;
    if (req.body.github) profileFields.github = req.body.github;
    if (req.body.linkedin) profileFields.linkedin = req.body.linkedin;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.school) profileFields.school = req.body.school;
    if (req.body.graduationYear) profileFields.graduationYear = req.body.graduationYear;
    if (req.body.levelOfStudy) profileFields.levelOfStudy = req.body.levelOfStudy;
    if (req.body.major) profileFields.major = req.body.major;
    if (req.body.dietaryRestrictions) profileFields.dietaryRestrictions = req.body.dietaryRestrictions;
    if (req.body.specialNeeds) profileFields.specialNeeds = req.body.specialNeeds;
    if (req.body.emergencyName) profileFields.emergencyName = req.body.emergencyName;
    if (req.body.emergencyNumber) profileFields.emergencyNumber = req.body.emergencyNumber;
    try {
      const profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        if (profile.status === "Incomplete" && isComplete) {
          profileFiends.status = "Registered";
          profileFields.statusChangedAt = new Date();
        }
        //Update Profile
        savedProfile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });
        return res.status(200).json(savedProfile);
      } else {
        if (isComplete) {
          profileFields.status = "Complete";
        }
        const savedProfile = await new Profile(profileFields).save();
        return res.status(200).json(savedProfile);
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  })
);

router.post("/resume", passport.authenticate("jwt", { session: false }), verify(), (req, res) => {
  uploadFile(req, res, function(err) {
    if (err) {
      return res.status(422).json(err.message);
    }
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (!profile) {
        return res.status(400).json("profile not foud");
      }
      if (req.file && profile.resume) {
        deleteResume(profile.resume);
      }
      profile.resume = req.file.key;
      profile.save().then(() => {
        console.log(`Resume ${req.file.key} uploaded`);
        res.status(200).json(`Resume uploaded. id:${req.file.key}`);
      });
    });
  });
});

//  @route  GET api/p/:user_id
//  @desc   Get user profile by id
//  @access Private
router.get("/:user_id", passport.authenticate("jwt", { session: false }), verify(), (req, res) => {
  const errors = {};
  if (req.user.role != "Director" || req.user.role != "Administrator") {
    errors.forbidden = "invalid access";
    return res.status(401).json(errors);
  }
  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json({ profile: "There is no profile for this user" }));
});

//  @route  DELETE api/p/
//  @desc   Delete user and profile
//  @access Private
router.delete("/", passport.authenticate("jwt", { session: false }), verify(), (req, res) => {
  Profile.findOneAndRemove({ user: req.user.id }).then(() => {
    User.findOneAndRemove({ _id: req.user.id }).then(() => {
      res.json({ success: true });
    });
  });
});

module.exports = router;
