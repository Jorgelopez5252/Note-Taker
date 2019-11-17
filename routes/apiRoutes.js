const router = require("express").Router();
const store = require("../db/notes");
console.log("inside api routes")
// GET "/api/notes" responds with all notes from the database
router.get("/notes", function(req, res) {
  store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});
router.get("/", function(req,res){
    console.log("inside / api route")
    res.json("/api route is called")
})

module.exports = router;