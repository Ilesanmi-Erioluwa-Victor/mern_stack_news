const express = require('express');

const app = express();
const authRoutes = require('./routes/auth');

// middleware
app.use(express.json());

// Routes
app.use('/api/', authRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`You are successfully connected to : ${PORT}`)
);
