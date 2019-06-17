const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load validation
const validateProfileInput = require("../../validation/profile");

//Load profile model
const Profile = require("../../models/Profile");
//Load user model
const User = require("../../models/User");

//  @route  GET api/profile/test
//  @desc   Test profile route
//  @access Public
router.get("/test", (req, res) => {
  res.json({ msg: "Profile Works" });
});

//  @route  GET api/profile/
//  @desc   Get current user profile
//  @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
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
  }
);

//  @route  POST api/profile/
//  @desc   Create user profile
//  @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid, isComplete } = validateProfileInput(req.body);
    //check validation
    if (!isValid) {
      //return any erros with 400 status
      return res.status(400).json(errors);
    }

    //get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.email = req.user.email;
    profileFields.status=req.user.status;
    if(req.user.status=='Incomplete' && isComplete){
      profileFields.status='Complete';
    }

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

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        new Profile(profileFields).save().then(profile => res.json(profile));
      }
    });
  }
);

//  @route  GET api/profile/:user_id
//  @desc   Get user profile by id
//  @access Public
router.get("/user/:user_id", (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: "There is no profile for this user" })
    );
});




//  @route  DELETE api/profile/
//  @desc   Delete user and profile
//  @access Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() => {
        res.json({ success: true });
      });
    });
  }
);

module.exports = router;