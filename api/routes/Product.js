const express = require('express');
const productRoute = express.Router();
const asyncHandler = require("express-async-handler");
const { Product } = require('../models/product');

productRoute.get("/", asyncHandler(async(req, res)=>{
    const products = await Product.find({});
    res.jscon(products);
}))
module.exports = productRoute;