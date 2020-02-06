const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const getDefaults = require("./config/defaults");
const mailgun = require("mailgun-js");

//import keys
const { port, dburi } = require("./config/keys");

//import route files
const users = require("./routes/api/user");
const profile = require("./routes/api/profile");
const admin = require("./routes/api/admin");

const UserModel = require("./models/User");
const ProfileModel = require("./models/Profile");

const app = express();

//body parser
app.use(express.json());

//enable cors
app.use(cors());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100
});
app.use(limiter);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Prevent http param pollution
app.use(hpp());

// Set static files
app.use(express.static(path.join(__dirname, "/client/build")));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//connect to db
mongoose
  .connect(dburi, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => console.log(err));

//Use Routes
app.use("/api/u", users);
app.use("/api/p", profile);
app.use("/api/a", admin);

app.get("/api", (req, res) => {
  const defaults = getDefaults();
  res.status(200).json({ Event: defaults.Event, Schedule: defaults.Schedule });
});

app.get("/verify/:token", (req, res) => {
  //get token from parameters
  const token = req.params.token;
  console.log(token);
  //find user with this token
  UserModel.findOne({ verificationToken: token })
    .select("verified verificationToken")
    .then(user => {
      if (!user) {
        //if no user then no such token exists
        return res.status(400).json("Invalid token");
      }
      //set verify flag to true
      user.verified = true;
      user.verificationToken = "";
      //save user and return success
      user.save().then(() => {
        res.status(200).send({
          success: true
        });
      });
      ProfileModel.findOne({ user: user.id }).then(profile => {
        const member = {
          name: profile.firstName,
          address: profile.email
        };
        mailgun
          .lists("subscribers@mg.hawkhack.io")
          .add({ members: member, subscribed: true });
      });
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});
