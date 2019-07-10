const path = require("path");
const dotenv = require("dotenv");
dotenv.config({path: path.resolve(__dirname, "./", ".env")});
module.exports = {
  dburi: process.env.DBURI,
  port: process.env.PORT,
  secretOrKey: process.env.SecretOrKey
};