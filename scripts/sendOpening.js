const mailgun = require("../config/mailgun");
const data = {
  from: "HawkHack <team@hawkhack.io>",
  to: "hackers@mg.hawkhack.io",
  subject: "HawkHack Spring 2020 Applications Now Open",
  template: "registration_open",
  "o:deliverytime": "Tue, 03 Mar 20 09:00:00 -0500"
};
mailgun.messages().send(data, function(error, body) {
  if (error) {
    console.log("Error:", error);
  }
  console.log(body);
});
