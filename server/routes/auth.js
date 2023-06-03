const express = require('express');

const router = express.Router();

router.get('/api/register', (req, res) => {
  res.json({
    data: 'You hit register endpoint',
    status: 'Success',
  });
});

module.exports = router;
