const Router = require("express").Router();

const { addUser, loginUser } = require("../controllers/account");
const validators = require("../validators");
const { validateCreateUserFields } = require("../validators/users/createUsers");
const { validateLoginUserFields } = require("../validators/users/loginUsers");

Router.post("/register", validators(validateCreateUserFields), addUser);
Router.post("/login", validators(validateLoginUserFields), loginUser);

module.exports = Router;
