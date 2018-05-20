// dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
const app = express();

// define the port to be used
const PORT = process.env.PORT || 8081;

// allow express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// open the port and start listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});