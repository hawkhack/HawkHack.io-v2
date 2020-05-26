const express = require("express");
const router = express.Router();
const wrap = require("../middleware/async");
const upload = require("../middleware/handleUpload");
const uploadResume = require("../utils/uploadResume");
const deleteResume = require("../utils/deleteResume");

//Load validation
const validateProfileInput = require("../validation/profile");

//Load profile model
const Profile = require("../models/Profile");

//Load user model
const User = require("../models/User");

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
    const profileFields = {};
    for (const field in req.body) {
      profileFields[field] = req.body[field];
    }
    profileFields.user = req.user.id;
    profileFields.email = req.user.email;

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
        if (profileFields.resume && profile.resume.key) {
          deleteResume(profile.resume.key);
        }
        if (
          profile.status === "Incomplete" &&
          isComplete &&
          (profileFields.resume.key || profile.resume.key)
        ) {
          profileFields.status = "Pending";
          profileFields.statusChangedAt = new Date(Date.now());
        }
        //Update Profile
        savedProfile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.status(200).json(savedProfile);
      } else {
        if (isComplete && profileFields.resume && profileFields.resume.key) {
          profileFields.status = "Pending";
          profileFields.statusChangedAt = new Date(Date.now());
        } else {
          profileFields.status = "Incomplete";
          profileFields.statusChangedAt = new Date(Date.now());
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
