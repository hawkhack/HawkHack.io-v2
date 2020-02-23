  const uploadFile = require("../services/upload-file");
  
  //check and upload resume
  const uploadResume = uploadFile.single("resume");

  uploadResume(req, res, err => {
    if (err) {
      return res.status(422).json(err);
    }
    return res.status(200).json(req.file.);
  });