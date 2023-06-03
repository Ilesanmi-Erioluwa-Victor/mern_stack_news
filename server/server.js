const express = require('express');

const app = express();

app.get('api/register', (req, res) => {
  res.json({
    data: 'You hit register endpoint',
  });
});
