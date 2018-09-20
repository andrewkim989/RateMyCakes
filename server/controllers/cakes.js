const mongoose = require("mongoose");
var Cake = mongoose.model("Cake");
var Review = mongoose.model("Review");

module.exports = {
    all: function(req, res) {
        Cake.find({}, function(err, cakes) {
            if (err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({cakes});
            }
        })
    },

    show: function(req, res) {
        Cake.findOne({_id: req.params.id}, function(err, cake){
            if (err){
               console.log("Returned error", err);
               res.json({message: "Error", error: err});
            }
            else {
               res.json({cake});
            }
        })
    },

    create: function(req, res) {
        var name = req.body.name;
        var image = req.body.image;
        var cake = new Cake({name: name, image: image});

        cake.save(function(err){
            if(err){
                res.json({error: err});
            }
            else {
                res.json({cake});
            }
        });
    },

    review: function(req, res) {
        var rate = req.body.rate;
        var comment = req.body.comment;
        var review = new Review ({rate: rate, comment: comment});

        review.save(function (err) {
            if(err){
                res.json({error: err});
            }
            else {
                Cake.findOne({_id: req.params.id}, function(err, cake){
                    if (err) {
                        console.log("Error. Data not found");
                        res.json({message: "Error", error: err});
                    }
                    else {
                        cake.reviews.push(review);
                        cake.save();
                        res.json({message: "Success"});
                    }
                });
            }
        })
    }
}