const express = require('express');
const router = express.Router();

const { registerCtrl } = require('../controllers/authCtrl');


router.get('/register', registerCtrl);

module.exports = router;
