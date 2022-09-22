const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed.routes");
const mongoose = require("mongoose");

// create an express app
const app = express();

// override CORS problem
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// serve resources statically.
app.use(express.static(path.join(__dirname, "public")));

// add body parser to parse incoming requests into application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// FEED ROUTES
app.use("/feed", feedRoutes);

// initiailize database connection
mongoose
  .connect("mongodb://localhost:27017")
  .then((result) => {
    // run the server on host: localhost port: 8000
    app.listen(8000);
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
