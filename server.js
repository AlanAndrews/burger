var express = require("express");
var bodyparser = require("body-parser");

var port = 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(port, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port);
  });