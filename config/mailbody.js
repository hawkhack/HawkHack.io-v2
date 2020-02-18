const getDefaults = require("./defaults");

let domain = "https://hawkhack.io";
if (process.env.NODE_ENV === "development") {
    domain = "http://localhost:3000";
}

module.exports = {
    confirmation: (toEmail, token)=>{
        const defaults = getDefaults();
        return body = {
            from: `${defaults.Event.name} <noreply@${defaults.Links.domain}>`,
            to: toEmail,
            subject: `${defaults.Event.name} Please verify your email`,
            template: "email_confirmation",
            vars:{token}
          };
    },
    reset: (toEmail, token)=>{
        const defaults = getDefaults();
        return body = {
            from: `${defaults.Event.name} <noreply@${defaults.Links.domain}>`,
            to: toEmail,
            subject: `${defaults.Event.name} Password Reset`,
            template: "password_reset",
            vars:{token}
          }
    }
}