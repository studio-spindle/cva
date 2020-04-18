const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.ENV === 'production' ? '*.creatingvalue.co' : 'http://localhost:3000'
}));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/subscribe', require('./routes/subscribe'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}.`));
