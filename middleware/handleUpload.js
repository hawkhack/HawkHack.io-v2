const multer = require("./multer");

const handleUpload = (req, res, next) => {
  const upload = multer.single("resume");

  upload(req, res, function(err) {
    if (err) {
      return res.status(400).json({ resume: err.message });
    }
    next();
  });
};

module.exports = handleUpload;
