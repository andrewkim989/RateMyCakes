var express = require("express");
var app = express();
app.use(express.static(__dirname + "RateMyCakes/dist/RateMyCakes"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(9753, function() {
    console.log("listening on port 9753");
});