//Dependencies
var express = require("express");
var path = require("path");


//Setting up an express APP
var app = express();
var PORT = 3000;

//Data parsing for Express App
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/Routing/apiRoutes")(app);
require("./app/Routing/htmlRoutes")(app);


//Start listening on the server

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});