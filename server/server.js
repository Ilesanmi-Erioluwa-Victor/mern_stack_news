const express = require('express');

const app = express();



const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>  console.log(`You are successfully connected to : ${PORT}`));
