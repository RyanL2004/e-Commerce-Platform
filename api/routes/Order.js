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

orderRoute.put('/:id/payment', protect, asyncHandler(async (req, res) => {
    console.log("Payment Route Called for Order ID:", req.params.id);
    console.log("Payment Data Received:", req.body);

    const order = await Order.findById(req.params.id);

    if (!order) {
        res.status(404);
        throw new Error('Order not found');
    }

    if (!req.body || !req.body.id || !req.body.status) {
        res.status(400);
        throw new Error('Invalid payment result data');
    }

    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    console.log("Order After Payment Update:", updatedOrder);
    res.status(200).json(updatedOrder);
}));


orderRoute.get('/', protect, asyncHandler(async(req, res) => {
    const orders = await Order.find({user:req.user._id}).sort({ _id: -1 });
    if (orders) {
        res.status(200).json(orders);
    }else {
        res.status(404);
        throw new Error('Orders not found')
    }

}))
orderRoute.get('/:id', protect,asyncHandler(async(req, res)=>{
    const order = await Order.findById(req.params.id).populate("user", "name email");
    console.log("populated Order:", order);
    if(order){
        res.status(200).json(order);
    }else{
        res.status(404);
        throw new Error('Order not found');
    }
}) )
module.exports = orderRoute;