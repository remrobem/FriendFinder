// Routing

// send the survey page if requested
// for all other get requests, the home page is sent

const path = require("path");

module.exports = function(app) {

  app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};
