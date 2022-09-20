const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed-routes");

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
app.use(bodyParser.json());

// FEED ROUTES
app.use("/feed", feedRoutes);

// run the server on host: localhost port: 8000
app.listen(8000);
