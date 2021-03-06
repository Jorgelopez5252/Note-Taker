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

//post route

router.post("/notes", function(req,res){
  store
  .addNotes(req.body)
  .then(note => res.json(note))
  .catch(err => res.status(500).json(err));
});


//delete route
router.delete("/notes/:id", function(req, res){
  console.log(req.params.id)
  store
  .deletenote(req.params.id)
  .then(() => res.json({ok:true}))
  .catch(err => res.status(500).json(err));
})


module.exports = router;