const { body } = require("express-validator");

exports.validateCreatePostFields = [
    body("title")
        .not()
        .isEmpty()
        .withMessage("Must specify title.")
        .isAscii()
        .withMessage("Invalid characters")
        .trim(),
    body("description")
        .not()
        .isEmpty()
        .withMessage("Must specify Description.")
        .isAscii()
        .withMessage("Invalid characters")
        .trim(),
];
