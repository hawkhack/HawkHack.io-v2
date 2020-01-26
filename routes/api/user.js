const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const request = require("request");
const randtoken = require("rand-token");
const uid = randtoken.uid;
const { secretOrKey, mailchimpKey } = require("../../config/keys");
const mailgun = require("../../config/mailgun");
const defaults = require("../../config/defaults.json");
const verify = require("../../middleware/verifyActive");

//Load user model
const User = require("../../models/User");

//Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//  @route  GET api/u/test
//  @desc   Test users route
//  @access Public
router.get("/test", (req, res) => {
  res.json({ msg: "Users Works" });
});

//  @route  GET api/u/test
//  @desc   Test users route
//  @access Public
router.get(
  "/testp",
  passport.authenticate("jwt", { session: false }),
  verify(),
  (req, res) => {
    res.json({ msg: "Users Works" });
  }
);

//  @route  POST api/u/register
//  @desc   register user
//  @access Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //check if email exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json({ errors: errors });
    } else {
      //create new user
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      //generate email verification token
      newUser.verificationToken = uid(32);

      //hash password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          //save user to db
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
      //send email verification
      const data = {
        from: "noreply@hawkhack.io",
        to: newUser.email,
        subject: `${defaults.Event.name} Please verify your email`,
        html: `<h1>${defaults.Event.name}</h1><p>Please verify your email by clicking the link below</p><p>www.hawkhack.io/verify/${newUser.verificationToken}</p>`
      };
      mailgun.messages().send(data, (err, body) => {
        if (err) {
          res.status(500).json("error");
          console.log("mailgun error: ", err);
        }
        console.log("verification email sent");
      });
    }
  });
});

//  @route  POST api/u/login
//  @desc   login user
//  @access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json({ errors: errors });
  }
  const email = req.body.email;
  const password = req.body.password;
  //Find user by email
  User.findOne({ email })
    .select("password")
    .then(user => {
      //check for user
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }

      //check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          //User mathed

          //Create JWT payload
          const payload = {
            id: user.id,
            email: user.email
          };

          //Sign Token
          jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        } else {
          errors.password = "Password incorrect";
          return res.status(400).json(errors);
        }
      });
    });
});

//  @route  GET api/u/current
//  @desc   Return current user
//  @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  verify(),
  (req, res) => {
    res.json({
      email: req.user.email,
      role: req.user.role,
      status: req.user.status,
      date: req.user.date
    });
  }
);

//  @route  GET api/u/preregister
//  @desc   Sign up to maillist
//  @access Public
router.post("/preregister", (req, res) => {
  const { fname, lname, email } = req.body;

  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: fname,
      LNAME: lname,
      EMAIL: email
    }
  };

  const postData = JSON.stringify(data);

  const options = {
    url: "https://us19.api.mailchimp.com/3.0/lists/dd503b0557/members",
    method: "POST",
    headers: {
      Authorization: `auth ${mailchimpKey}`
    },
    body: postData
  };

  request(options, (err, response, body) => {
    const resdata = JSON.parse(body);
    res.json(resdata);
  });
});

//  @route  POST api/u/changepw
//  @desc   Change user password
//  @access Private
router.post(
  "/changepw",
  passport.authenticate("jwt", { session: false }),
  verify(),
  (req, res) => {
    var errors = {};
    var { newpw } = req.body;
    User.findOne({ email: req.user.email }).then(user => {
      if (!user) {
        errors.nouser = "user not found";
        return res.status(500).json(errors);
      }
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newpw, salt, (err, hash) => {
          if (err) throw err;
          if (user.password == hash) {
            errors.samepassword =
              "The password needs to be different than your current";
            return res.status(412).json(errors);
          }
          user.password = hash;
          user
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    });
  }
);

module.exports = router;
