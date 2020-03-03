const mailgun = require("../config/mailgun");
const data = {
    from: "HawkHack <team@hawkhack.io>",
    to: "test@mg.hawkhack.io",
    subject: "[TEST] Registration now open",
    template: "registration_open",
};
mailgun.messages().send(data, function (error, body) {
    console.log(body);
});