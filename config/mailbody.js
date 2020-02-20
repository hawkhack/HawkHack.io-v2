const getDefaults = require("./defaults");

let domain = "https://hawkhack.io";
if (process.env.NODE_ENV === "development") {
  domain = "http://localhost:3000";
}

module.exports = {
  confirmEmail: (toEmail, token) => {
    const defaults = getDefaults();
    return (body = {
      from: `${defaults.Event.name} <noreply@${defaults.Links.domain}>`,
      to: toEmail,
      subject: `${defaults.Event.name} Please verify your email`,
      template: "email_confirmation",
      "v:token":token
    });
  },
  reset: (toEmail, token) => {
    const defaults = getDefaults();
    return (body = {
      from: `${defaults.Event.name} <noreply@${defaults.Links.domain}>`,
      to: toEmail,
      subject: `${defaults.Event.name} Password Reset`,
      template: "password_reset",
      "v:token": token
    });
  },
  confirmation: (toEmail, firstName, token) => {
    const defaults = getDefaults();
    return (body = {
      from: `${defaults.Event.name} <noreply@${defaults.Links.domain}>`,
      to: toEmail,
      subject: `${defaults.Event.name} You have been Accepted to HawkHack Spring 2020`,
      html: `<p>Congratulations ${firstName}!<br>You have been accepted to HawkHack Spring 2020. Please let us know if you are coming by clicking the link below.</p><p>${domain}/confirm/${token}`
    });
  }
};
