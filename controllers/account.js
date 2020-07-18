const User = require("../models/User.model");
const { genSalt, hash } = require("bcryptjs");

exports.addUser = async (req, res, next) => {
    const { firstName, lastName, userName, email, password } = req.body;

    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
        const error = [
            {
                value: email,
                msg: "Email already exists.",
                param: "email",
                location: "body",
            },
        ];

        return res.status(400).send(error);
    }

    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);

    try {
        const user = await new User({
            firstName,
            lastName,
            userName,
            email,
            password: hashPassword,
        }).save();

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};
