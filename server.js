const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const defaults = require("./config/defaults.json");

//import keys
const { port, dburi } = require("./config/keys");

//import route files
const users = require("./routes/api/user");
const profile = require("./routes/api/profile");
const admin = require("./routes/api/admin");

const UserModel = require("./models/User");

//initialize express app
const app = express();

//body parse middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.get("/api", (req, res) => {
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
        res.redirect("/login");
      });
    });
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
