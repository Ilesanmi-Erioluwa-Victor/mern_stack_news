const express = require('express');
const router = express.Router();

const { registerCtrl } = require('../controllers/authCtrl');


router.post('/register', registerCtrl);

module.exports = router;
