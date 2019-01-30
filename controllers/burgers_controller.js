var express = require("express");
var router = express.Router();
var burgers = require("../models/burger");

// Sets up the Express app to handle data parsing

// gets homepage and displays current burgerse in db
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//adding burger to db on click
router.post("/api/burgers", function(req, res) {
  burgers.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//changing devour state on click
router.post("/api/burgers", function(req, res) {
  burgers.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

module.exports = router;
