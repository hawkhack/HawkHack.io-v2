const s3 = require("../config/aws"),
  fs = require("fs");

module.exports = file => {
  const params = {
    Bucket: process.env.ResumeBucketName,
    Key: file.filename,
    Body: fs.readFileSync(file.path),
    Metadata: { "x-amz-meta-originalname": file.originalname }
  };

  return s3.upload(params).promise();
};
