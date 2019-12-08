const fs = require("fs");
const util = require("util");

const readFileAsyn = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


class Notes{
    constructor(){
        this.id= 0;

    }
    read(){
        return readFileAsyn("db/db.json", "utf8")

    }
    write(note){
        return writeFile("db/db.json",JSON.stringify(note))

    }
    getNotes(){
        console.log("inside getNotes function db")
        return this.read().then(notes => {
            var parderdNotes = JSON.parse(notes);
            console.log("parsed Notes: " +parderdNotes)
            return parderdNotes;
        })

    }
    addNotes(note){
        const {title, text} = note;
        const newNotes = {title, text,id: ++this.id};
        return this.getNotes().then(notes => [...notes, newNotes])
        .then(updateNotes => this.write(updateNotes))
        .then(() => newNotes)

    }
}
module.exports = new Notes();