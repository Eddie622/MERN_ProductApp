const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be less than 0"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [6, "Description must be at least 6 characters long"]
    },
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);
