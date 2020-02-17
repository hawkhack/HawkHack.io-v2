const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
var rfs = require("rotating-file-stream");
var logDirectory = path.join(__dirname, "../log");

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = rfs.createStream("access.log", {
  interval: "3d", // rotate daily
  path: logDirectory
});

module.exports = () => {
  if (process.env.NODE_ENV === "development") {
    return morgan("dev");
  } else {
    return morgan("combined", { stream: accessLogStream });
  }
};
