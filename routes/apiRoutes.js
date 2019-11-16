var router = require("express").Router();
const Notes = require("../db/notes")

router.get("/notes", function(req, res){
    Notes.getNotes()
    .then(notes => res.json(notes))
})