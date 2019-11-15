const express = require("express");
// this app is the instance of my server
const app = express();
const PORT = process.env.PORT || 1738;

app.use(express.static("public"))

////////////////////////////////////////////
// Hacky way of doing it but it may help understand "get" method
app.get("/api/notes", function(req, res){
    res.json(require("./db/db.json")); 
})
///////////////////////////////////////////////////////////////
// Commented out below since using that method would be a pain in the butt so use the express.static above instead

// app.get("/", function(req,res){
// res.sendFile(__dirname + "/public/index.html");
// });
// app.get("/assets/js/index.js", function(req,res){
//     res.sendFile(__dirname + "/public/assets/js/index.js");
    
//     });
//////////////////////////////////////////////////////////////////
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));