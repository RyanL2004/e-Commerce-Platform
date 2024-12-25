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

orderRoute.put('/:id/payment', protect, asyncHandler(async(req, res)=>{
    const order = await Order.findById(req.params.id);
    console.log(order);
    if(order){
        order.isPaid = true
        order.paidAt = Date.now();
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address
        }
        const updateOrder = await order.save();
        console.log(updateOrder);
        res.json(updateOrder);
    }else{
        res.status(404);
        throw new Error('Order not found');
    }
}))
module.exports = orderRoute;