const s3 = require("../config/aws"),
  multer = require("multer"),
  multers3 = require("multer-s3"),
  uuid = require("uuid/v4"),
  path = require("path");

const fileFilter = (req, file, callback) => {
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

upload = multer({
  fileFilter,
  storage: multers3({
    s3,
    bucket: process.env.ResumeBucketName,
    metadata: (req, file, callback) => {
      callback(null, { originalname: file.originalname });
    },
    key: (req, file, callback) => {
      console.log(file.mimetype);
      callback(null, `${uuid()}${path.extname(file.originalname)}`);
    }
  })
});

module.exports = upload.single("resume");
