const { check } = require("express-validator")

exports.userRegisterValidator = [
    check("name").not().isEmpty().withMessage("Please, Name is required...")
]
