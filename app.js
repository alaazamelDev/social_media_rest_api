const express = require("express");
const bodyParser = require("body-parser");
const feedsRoutes = require("./routes/feed-routes");

// create an express app
const app = express();

// add body parser to parse incoming requests into application/json
app.use(bodyParser.json());

// override CORS problem
app.use((req, res, next) => {
  res.setHeader("Access-Conrtol-Allow-Origin", "*");
  res.setHeader("Access-Conrtol-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Conrtol-Allow-Headers", "*");
  next();
});

// FEED ROUTES
app.use("/feeds", feedsRoutes);

// run the server on host: localhost port: 8000
app.listen(8000);
