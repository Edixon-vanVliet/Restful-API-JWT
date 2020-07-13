const User = require("../models/User.model");

exports.addUser = async (req, res, next) => {
    const { firstName, lastName, userName, email, password } = req.body;

    try {
        const user = await new User({
            firstName,
            lastName,
            userName,
            email,
            password,
        }).save();

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};
