const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./controllers/authController');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(
  () => console.log(`Database ready`)
);

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
