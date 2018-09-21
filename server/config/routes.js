var cakes = require("../controllers/cakes.js");
var path = require("path");

module.exports = function(app) {
    app.get("/cakes", function(req, res) {
        cakes.all(req, res);
    });
    
    app.get("/cakes/:id", function(req, res) {
        cakes.show(req, res);
    });
    
    app.post("/cakes", function(req, res) {
        cakes.create(req, res);
    });
    
    app.post("/cakes/:id", function(req, res) {
        cakes.review(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./RateMyCakes/dist/RateMyCakes/index.html"));
    });
}