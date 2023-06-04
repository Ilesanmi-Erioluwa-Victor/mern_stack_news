const { check } = require("express-validator")

exports.userRegisterValidator = [
  check('name').not().isEmpty().withMessage('Please, Name is required...'),
  check('email').isEmail().withMessage('Must be a valid email address..'),
  check('password').isLength({min : 4}).withMessage('Password  must be greater than 4 characters long...'),
];
