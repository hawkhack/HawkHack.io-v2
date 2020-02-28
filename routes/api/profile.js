const express = require("express");
const router = express.Router();
const wrap = require("../../middleware/asyncWrapper");
const upload = require("../../middleware/handleUpload");
const uploadResume = require("../../utils/uploadResume");
const deleteResume = require("../../utils/deleteResume");

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
router.get("/", (req, res) => {
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
  upload,
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
    profileFields.firstName = req.body.firstName;
    profileFields.lastName = req.body.lastName;
    profileFields.phoneNumber = req.body.phoneNumber;
    profileFields.dateOfBirth = req.body.dateOfBirth;
    profileFields.shirtSize = req.body.shirtSize;
    profileFields.gender = req.body.gender;
    profileFields.ethnicity = req.body.ethnicity;
    profileFields.github = req.body.github;
    profileFields.linkedin = req.body.linkedin;
    profileFields.website = req.body.website;
    profileFields.school = req.body.school;
    profileFields.graduationYear = req.body.graduationYear;
    profileFields.levelOfStudy = req.body.levelOfStudy;
    profileFields.major = req.body.major;
    profileFields.dietaryRestrictions = req.body.dietaryRestrictions;
    profileFields.specialNeeds = req.body.specialNeeds;
    profileFields.emergencyName = req.body.emergencyName;
    profileFields.emergencyNumber = req.body.emergencyNumber;

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      if (req.file) {
        const upload = await uploadResume(req.file);
        profileFields.resume = {
          key: upload.key,
          name: req.file.originalname
        };
        console.log(`Resume ${profileFields.resume.key} saved`);
      }

      if (profile) {
        if (profile.resume) {
          deleteResume(profile.resume.key);
        }
        if (profile.status === "Incomplete" && isComplete && profile.resume) {
          profileFields.status = "Pending";
          profileFields.statusChangedAt = new Date();
        }
        //Update Profile
        savedProfile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.status(200).json(savedProfile);
      } else {
        if (isComplete && profileFields.resume != null) {
          profileFields.status = "Pending";
        } else {
          profileFields.status = "Incomplete";
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
router.get("/:user_id", (req, res) => {
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
router.delete("/", (req, res) => {
  Profile.findOneAndRemove({ user: req.user.id }).then(() => {
    User.findOneAndRemove({ _id: req.user.id }).then(() => {
      res.json({ success: true });
    });
  });
});

module.exports = router;
