const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// const clientHostname = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://creatingvalue.co';

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/subscribe', require('./routes/subscribe'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}.`));
