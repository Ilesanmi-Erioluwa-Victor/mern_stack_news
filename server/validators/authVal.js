const { check } = require("express-validator")

exports.userRegisterValidator = [
  check('name').not().isEmpty().withMessage('Please, Name is required...'),
  check('email').isEmail().withMessage('Must be a valid email address..'),
  check('password').isLength({min : 6}).withMessage('Password  must be greater than 6 characters long...'),
];
