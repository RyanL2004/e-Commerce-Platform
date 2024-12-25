const mongoose = require("mongoose")


const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }
        //user providing a review
    },
    {
        timestamps: true
    }

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

        reviews: [reviewSchema],
    
    },
    {
        timestamps: true
    }
);  

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
