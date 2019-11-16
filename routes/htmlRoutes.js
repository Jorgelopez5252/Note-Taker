var path = require("path");
var router = require("express").Router();

router.get("/notes", function(req, res) {
    console.log("inside notes route")
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  
router.get("*", function(req, res) {
    console.log("insode * route")
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router;