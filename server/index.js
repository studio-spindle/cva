const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// const clientHostname = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://creatingvalue.co';

console.log('test env var: ', process.env.EMAIL_TO_1);

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/subscribe', require('./routes/subscribe'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}.`));
