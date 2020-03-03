const AWS = require("aws-sdk");
const ID = process.env.AWSAccessKeyID;
const SECRET = process.env.AWSAccessKey;

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

module.exports = s3;
