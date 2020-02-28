const express = require("express");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const logger = require("./config/logger");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const getDefaults = require("./config/defaults");
const verifyRole = require("./middleware/verifyRole");
const verify = require("./middleware/verifyActive");

//import route files
const users = require("./routes/api/user");
const profile = require("./routes/api/profile");
const admin = require("./routes/api/admin");

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

app.use(logger());

// Prevent http param pollution
app.use(hpp());

// Set static files
app.use(express.static(path.join(__dirname, "/client/build")));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//connect to db
connectDB();

//Use Routes
app.use("/api/u", users);
app.use("/api/p", passport.authenticate("jwt", { session: false }), verify(), profile);
app.use(
  "/api/a",
  passport.authenticate("jwt", { session: false }),
  verify(),
  verifyRole("Director", "Administrator"),
  admin
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://hawkhack.io"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api", (req, res) => {
  const defaults = getDefaults();
  res.status(200).json({ Event: defaults.Event, Schedule: defaults.Schedule });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});

//handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});
