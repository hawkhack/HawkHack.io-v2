const fs = require("fs");
const path = require("path");
const s3 = require("../config/aws");
module.exports = (fileName, newFileName, callback) => {
  const fileContent = fs.readFileSync(
    path.join(__dirname, "../temp/", fileName)
  );

  const params = {
    Bucket: process.env.ResumeBucketName,
    Key: newFileName,
    Body: fileContent
  };

  s3.upload(params, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, `Resume uploaded to ${data.Location}`);
    }
  });
};
