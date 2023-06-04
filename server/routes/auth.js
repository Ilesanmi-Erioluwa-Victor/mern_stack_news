const express = require('express');
const router = express.Router();

const { registerCtrl } = require('../controllers/authCtrl');

// Validations <>Middleware<>
const { userRegisterValidator } = require('../validators/authVal');
const { runValidation } = require('../validators');


router.post('/register',userRegisterValidator, runValidation, registerCtrl);

module.exports = router;
