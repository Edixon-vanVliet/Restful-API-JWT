const Router = require("express").Router();

const { addUser } = require("../controllers/account");
const validators = require("../validators");
const { validateCreateUserFields } = require("../validators/users");

Router.post("/register", validators(validateCreateUserFields), addUser);

module.exports = Router;
