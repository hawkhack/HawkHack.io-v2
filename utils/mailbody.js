const getDefaults = require("./defaults");

let baseURL = process.env.BaseURL;
console.log(baseURL, process.env.BaseURL);

module.exports = {
  confirmEmail: (toEmail, token) => {
    const defaults = getDefaults();
    return (body = {
      from: `${defaults.Event.name} <noreply@${defaults.Links.domain}>`,
      to: toEmail,
      subject: `${defaults.Event.name} Please verify your email`,
      template: "email_confirmation",
      "v:url": `${baseURL}/verify/${token}`,
      "o:tag": ["EmailConfirmation", defaults.Event.edition]
    });
  },
  reset: (toEmail, token) => {
    const defaults = getDefaults();
    return (body = {
      from: `${defaults.Event.name} <noreply@${defaults.Links.domain}>`,
      to: toEmail,
      subject: `${defaults.Event.name} Password Reset`,
      template: "password_reset",
      "v:url": `${baseURL}/reset/${token}`,
      "o:tag": ["PasswordReset", defaults.Event.edition]
    });
  },
  confirmation: (toEmail, firstName, token) => {
    const defaults = getDefaults();
    return (body = {
      from: `${defaults.Event.name} <noreply@${defaults.Links.domain}>`,
      to: toEmail,
      subject: `${defaults.Event.name} You have been Accepted to HawkHack Spring 2020`,
      html: `<p>Congratulations ${firstName}!<br>You have been accepted to HawkHack Spring 2020. Please let us know if you are coming by clicking the link below.</p><p>${baseURL}/confirm/${token}`,
      "o:tag": ["Confirmation", defaults.Event.edition]
    });
  }
};
