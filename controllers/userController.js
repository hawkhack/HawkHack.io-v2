const asyncWrapper = require("../middleware/async"),
    { mailServices } = require("../services"),
    bcrypt = require("bcryptjs"),
    jwt = require("jsonwebtoken"),
    passport = require("passport"),
    randtoken = require("rand-token"),
    uid = randtoken.uid,
    { secretOrKey } = require("../../config/keys");



module.exports = {
    test: asyncWrapper(async (req, res) => {
        res.status(200).json("user route test");
    }),
    getCurrentUser: asyncWrapper(async (req, res) => {
        try {
            const data = {
                email: req.user.email,
                isVerified: req.user.verified,
                role: req.user.role
            };

            //TODO: Get user profile from db
            const profile = {};
            if (profile) {
                data.profile = profile;
            }
            return res.json(data);
        } catch (err) {
            next(err);
        }
    }),
    register: asyncWrapper(async (req, res) => {
        const { errors, isValid } = validateRegisterInput(req.body);
        //check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        //check if email exists
        //TODO: Retrieve user by email
        const user = {};
        if (user) {
            errors.email = "Email already exists";
            return res.status(400).json(errors);
        } else {
            //create new user
            // const newUser = new User({
            //     email: req.body.email,
            //     password: req.body.password
            // });
            const newUser = {
                email: req.body.email,
                password: req.body.password
            };

            //generate email verification token
            newUser.verificationToken = uid(32);

            //hash password
            bcrypt.genSalt(13, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;

                    //save user to db
                    //TODO: add newUser to db

                    //send email verification
                    mailServices.emailConfirmation(newUser.email, newUser.verificationToken);
                    const payload = {
                        id: user.id,
                        email: user.email
                    };
                    //Sign Token
                    jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
                        return res.status(200).json({
                            success: true,
                            token: "Bearer " + token
                        });
                    });
                });
            });
        }
    }),
    login: asyncWrapper(async (req, res) => {
        const { errors, isValid } = validateLoginInput(req.body);
        //check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const email = req.body.email;
        const password = req.body.password;
        //Find user by email
        User.findOne({ email })
            .select("password")
            .then(user => {
                //check for user
                if (!user) {
                    errors.email = "User not found";
                    return res.status(404).json(errors);
                }

                //check password
                bcrypt.compare(password, user.password).then(isMatch => {
                    if (isMatch) {
                        //User mathed

                        //Create JWT payload
                        const payload = {
                            id: user.id,
                            email: user.email
                        };

                        //Sign Token
                        jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.status(200).json({
                                success: true,
                                token: "Bearer " + token
                            });
                        });
                    } else {
                        errors.password = "Password incorrect";
                        return res.status(400).json(errors);
                    }
                });
            });
    })

}