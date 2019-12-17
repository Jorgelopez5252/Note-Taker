const express = require("express");
// this app is the instance of my server
var htmlRoutes  = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);
app.get("*", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
