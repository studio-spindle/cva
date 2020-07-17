const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const clientHostname =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://creatingvalue.co";

const whitelist = ["http://localhost:3000", "https://creatingvalue.co"];

console.log(clientHostname);

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        var msg = !origin
          ? "CORS: origin is not set."
          : `The CORS policy for this site does not allow access from ${origin}.`;
        callback(
          new Error(msg)
        );
      }
    },
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/subscribe", require("./routes/subscribe"));

module.exports = app;
