const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const clientHostname = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://creatingvalue.co';

// Middleware
app.use(express.json());
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) {
      var msg = 'No origin has been set.';
      return callback(new Error(msg), false);
    }

    if(clientHostname !== origin){
      var msg = `The CORS policy for this site does not allow access from ${origin}.`;
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  }
}));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/subscribe', require('./routes/subscribe'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}.`));
