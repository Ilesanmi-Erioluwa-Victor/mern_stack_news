const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const authRoutes = require('./routes/auth');

// DB connect
mongoose
  .connect(process.env.DATABAS_CLOUD)
  .then(() => console.log('DB Successfully connected..'))
  .catch( (err) => console.log(err));
// app middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// middleware
app.use(express.json());

// Routes
app.use('/api/', authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`You are successfully connected to : ${PORT}`)
);
