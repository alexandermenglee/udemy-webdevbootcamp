var express = require("express");
var app = express();

app.set("view engine", "ejs");

//ROUTES
app.get("/", function(req, res){
  res.send("<h1> Home Page </h1>");
});

//ROUTE PARAMETERS
app.get("/:id/:name", function(req, res){
  var id = req.params.id;
  var name = req.params.name;
  res.send("ID: " + id + " - " + "Name: " + name);
})

app.listen(3000, function(){
  console.log("SERVER STARTED");
});
