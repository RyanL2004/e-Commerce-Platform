const express = require('express');
const orderRoute = express.Router();
const protect = require('../middleware/Auth');
const asyncHandler = require('express-async-handler');
const Order = require('../models/Order');

orderRoute.post('/',protect, asyncHandler(async(req ,res)=>{
    const {
        orderItems,
        shippingAddress,
        paymentMethods, 
        shippingPrice, 
        taxPrice, 
        totalPrice, 
        price
     } = req.body;
    if (orderItems && orderItems.length === 0 ){
         res.status(400);
         throw new Error('No order Items found !');


    }else{
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethods,
            shippingPrice,
            taxPrice,
            totalPrice,
            price
        });
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
  }
));

module.exports = orderRoute;