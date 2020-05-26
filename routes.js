const { userController, profileController, adminController } = require("./controllers");
const getDefaults = require("./utils/defaults");

module.exports = (router) => {
    router.get("/health", (req, res) => res.status(200).json({ ok: true }));
    router.get("/api", (req, res) => {
        const defaults = getDefaults();
        res.status(200).json({ Event: defaults.Event, Schedule: defaults.Schedule });
    })

    //user routes
    router.get("/u/test", userController.test);
    router.route("/u").get(userController.)
}