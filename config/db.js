const mongoose = require("mongoose");
const { dburi } = require("./keys");

const connectDB = async () => {
  try {
    await mongoose.connect(dburi, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
