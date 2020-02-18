const path = require("path");
const dotenv = require("dotenv");
switch (process.env.NODE_ENV) {
  case "production":
    dotenv.config({ path: path.resolve(__dirname, "./", ".env") });
    break;
  case "development":
    dotenv.config({ path: path.resolve(__dirname, "./", ".env.dev") });
    break;
  default:
    dotenv.config({ path: path.resolve(__dirname, "./", ".env.local") });
}
module.exports = {
  dburi: process.env.DBURI,
  port: process.env.PORT,
  secretOrKey: process.env.SecretOrKey,
  mailgunKey: process.env.MAILGUN_KEY,
  mailgunDomain: process.env.MAILGUN_DOMAIN
};
