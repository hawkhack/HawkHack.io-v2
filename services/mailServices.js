const mailgun = require("../config/mailgun");
const mailbody = require("../utils/mailbody");

module.exports = {
    emailConfirmation: (email, token) => {
        const data = mailbody.confirmEmail(email, token);
        mailgun.messages().send(data, (err, body) => {
            if (err) {
                console.log("mailgun error: ", err);
            }
            console.log(`verification email sent to ${data.to}`);
        });
    }
}