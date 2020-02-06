const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrap = require("../../middleware/asyncWrapper");

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
router.get("/test", (req, res) => {
  res.json({ msg: "Profile Works" });
});

//  @route  GET api/p/
//  @desc   Get current user profile
//  @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  verify(),
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

//  @route  POST api/p/
//  @desc   Create user profile
//  @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  verify(),
  wrap(async (req, res) => {
    const { errors, isValid, isComplete } = validateProfileInput(req.body);
    //check validation
    if (!isValid) {
      //return any erros with 400 status
      return res.status(400).json(errors);
    }

    //get fields
    const {
      firstName,
      lastName,
      phoneNumber,
      dateOfBirth,
      shirtSize,
      gender,
      ethnicity,
      github,
      linkedin,
      website,
      school,
      graduationYear,
      levelOfStudy,
      major,
      dietaryRestrictions,
      specialNeeds,
      emergencyName,
      emergencyNumber
    } = req.body;

    const profileFields = {
      user: req.user.id,
      email: req.user.email,
      firstName,
      lastName,
      phoneNumber,
      dateOfBirth,
      shirtSize,
      gender,
      ethnicity,
      github,
      linkedin,
      website,
      school,
      graduationYear,
      levelOfStudy,
      major,
      dietaryRestrictions,
      specialNeeds,
      emergencyName,
      emergencyNumber
    };

    try {
      const profile = await Profile.findOne({ id: req.user.id });
      if (profile) {
        if (profile.status === "Incomplete" && isComplete) {
          profileFiends.status = "Registered";
          profileFields.statusChangedAt = new Date();
        }
        //Update
        const updatedProfile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true, runValidators: true }
        );
        return res.status(200).json(updatedProfile);
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

//  @route  GET api/p/:user_id
//  @desc   Get user profile by id
//  @access Private
router.get(
  "/:user_id",
  passport.authenticate("jwt", { session: false }),
  verify(),
  (req, res) => {
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
      .catch(err =>
        res.status(404).json({ profile: "There is no profile for this user" })
      );
  }
);

//  @route  DELETE api/p/
//  @desc   Delete user and profile
//  @access Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  verify(),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() => {
        res.json({ success: true });
      });
    });
  }
);

module.exports = router;
