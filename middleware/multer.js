const multer = require("multer"),
  uuid = require("uuid/v4"),
  path = require("path"),
  fs = require("fs");

const resumePath = path.join(__dirname + "/../resumes");

let fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "application/msword" ||
    file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    callback(null, true);
  } else {
    console.log("wrong mime");
    callback(new Error("Invalid Mime Type, Only PDF, DOC, or DOCX allowed."));
  }
};

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (!fs.existsSync(resumePath)) {
      fs.mkdirSync(resumePath, 0744);
    }
    callback(null, path.join(__dirname + "/../resumes"));
  },
  filename: (req, file, callback) => {
    callback(null, `${uuid()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  fileFilter,
  storage,
  limits: {
    fileSize: 1024 * 1024 * 2
  }
});

module.exports = upload;
