const mongoose = require("mongoose")


const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }
        //user prividing a review
    },

)


const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true , default: 0},
        CountInStock: { type: Number, required: true, default: 0 },
        rating: { type: Number, required: true , default: 0},
        numReview: { type: Number, required: true , default: 0},
        category: { type: String, required: true },

        reviews: [reviewSchema],
    
    }
);  

const Product = mongoose.model("Product", productSchema);
const Review = mongoose.model("Review", reviewSchema);

module.exports = { Product, Review };
