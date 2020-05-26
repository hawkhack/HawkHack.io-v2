const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const logger = require("./config/logger");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");

//import route files
const user = require("./routes/user");
const profile = require("./routes/profile");
const admin = require("./routes/admin");

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
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 mins
//   max: 100
// });
// app.use(limiter);

app.use(logger());

// Prevent http param pollution
app.use(hpp());

// Set static files
app.use(express.static(path.join(__dirname, "/client/build")));


//connect to db
// connectDB();

//Use Routes
// app.use("/api/auth", auth);
app.use("/api/u", user);
// app.use("/api/p", profile);
// app.use("api/a", admin);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://hawkhack.io"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
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
