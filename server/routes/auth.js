const express = require('express');
const router = express.Router();

const { registerCtrl } = require('../controllers/authCtrl');
const { userRegisterValidator } = require('../validators/authVal');
const { runValidation } = require('../validators');
runValidation

router.post('/register', registerCtrl);

module.exports = router;
