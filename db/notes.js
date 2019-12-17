const fs = require("fs");
const util = require("util");
const uuidv4 = require('uuid/v4');

const readFileAsyn = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


class Notes{
    read(){
        return readFileAsyn("db/db.json", "utf8")

    }
    write(note){
        return writeFile("db/db.json",JSON.stringify(note))

    }
    getNotes(){
        // console.log("inside getNotes function db")
        return this.read().then(notes => {
            var parderdNotes = [].concat(JSON.parse(notes));
            console.log("parsed Notes: " + parderdNotes)
            return parderdNotes;
        })

    }
    addNotes(note){
        
        const newNotes = {
            title: note.title,
            text: note.text,
            id:  uuidv4(),
        };
        return this.getNotes().then(notes => [...notes, newNotes])
        .then(updateNotes => this.write(updateNotes))
        .then(() => newNotes)

    }
    deletenote(id){
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(filteredNotes => this.write(filteredNotes));
    }
}
module.exports = new Notes();