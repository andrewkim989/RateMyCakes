var cakes = require("../controllers/cakes.js");

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
}