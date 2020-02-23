const s3 = require("../config/aws");

module.exports = key => {
  var params = {
    Bucket: process.env.ResumeBucketName,
    Key: key
  };

  s3.deleteObject(params, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(`Resume ${key} deleted`);
  });
};
