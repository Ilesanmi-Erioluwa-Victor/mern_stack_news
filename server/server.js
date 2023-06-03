const express = require('express');

const app = express();

app.get('/api/register', (req, res) => {
  res.json({
    data: 'You hit register endpoint',
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>  console.log(`You are successfully connected to : ${PORT}`));
