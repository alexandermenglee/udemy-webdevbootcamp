var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//ROUTES
app.get("/",function(req, res){
  res.render("index");
});

//ROUTE PARAMETERS
app.get("/:message/:count", function(req, res){
  var message = req.params.message;
  var count = Number(req.params.count);
  var messageReturned = "";
  for(var i = 0; i < count; i++){
    messageReturned += message + " ";
  }
  res.send(messageReturned);
});

//CATCHES ALL ROUTES
app.get("*", function(req, res){
  res.render("dne");
});

//Listens on port 3000 for server to start
app.listen(3000, function(){
    console.log("SERVER HAS STARTED");
});
