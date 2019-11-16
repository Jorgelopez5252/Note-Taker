const express = require("express");
// this app is the instance of my server
var htmlRoutes  = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// app.get("/notes", function(req, res) {
//   res.sendFile(path.join(__dirname, "/public/notes.html"));
// });

// ////////////////////////////////////////////
// // Hacky way of doing it but it may help understand "get" method 20:40 min
// app.get("/api/notes", function(req, res) {
//   res.json(require("./db/db.json"));
// });


// app.get("/notes", function(req, res) {
//   res.sendFile(path.join(__dirname, "/public/notes.html"));
// });
// app.get("/api/notes", async function(req, res) {
//   const db = JSON.parse(await readFileAsync(__dirname + "/db/db.json"));
//   return res.json(db);
// });
///////////////////////////////////////////////////////////////
// Commented out below since using that method would be a pain in the butt so use the express.static above instead

// app.get("/", function(req,res){
// res.sendFile(__dirname + "/public/index.html");
// });
// app.get("/assets/js/index.js", function(req,res){
//     res.sendFile(__dirname + "/public/assets/js/index.js");

//     });
//////////////////////////////////////////////////////////////////
// returns you home for any error you make in url

/////////////////////////////////////////////////////////////////

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
