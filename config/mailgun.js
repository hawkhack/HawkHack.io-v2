const { mailgunKey, mailgunDomain } = require("./keys");
var mailgun = require("mailgun-js")({
  apiKey: mailgunKey,
  domain: mailgunDomain
});

module.exports = mailgun;
