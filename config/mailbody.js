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
            html: `<p>Hi,<br>Welcome to ${defaults.Event.name} ${defaults.Event.edition}. Please verify your email by clicking the link below.</p><p>${domain}/verify/${token}</p><p>If you did sign up for a ${defaults.Event.name} account please disregard this email.</p><p>Happy Hacking!<br>Team ${defaults.Event.name}</p>`
          };
    },
    reset: (toEmail, token)=>{
        const defaults = getDefaults();
        return body = {
            from: `${defaults.Event.name} <noreply@${defaults.Links.domain}>`,
            to: toEmail,
            subject: `${defaults.Event.name} Password Reset`,
            html: `<p>Hi,<br>An account registered in ${defaults.Event.name} has issued a password reset. Clicking the link below to reset your password. </p><p>${domain}/reset/${token}</p><p>If you did not issue a password reset please disregard this email.</p><p>Happy Hacking!<br>Team ${defaults.Event.name}</p>`
          }
    }
}