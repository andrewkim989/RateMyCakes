var mongoose = require("mongoose");

var ReviewSchema = new mongoose.Schema({
    rate: {type: Number, required: [true, "Please submit a rating for the cake"]},
    comment: {type: String, required: [true, "Please type a review for the cake"],
    minlength: [5, "Review must be at least 5 characters long"]}
}, {timestamps: true });

var CakeSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please enter the name of the baker"],
    minlength: [2, "Name must be at least 2 characters long"]},
    image: {type: String, required: [true, "Please submit the image of the cake"] },
    reviews: [ReviewSchema]
}, {timestamps: true });

mongoose.model("Cake", CakeSchema);
mongoose.model("Review", ReviewSchema);