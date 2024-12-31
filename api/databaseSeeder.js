const router = require('express').Router();
const User = require('./models/User');
const users = require('./data/Users');
const products = require('./data/Products').default;
const Product = require('./models/product');
const AsynHandler = require('express-async-handler');

//Users Seed
router.post('/users', AsynHandler(async(req,res)=>{
    await User.deleteMany({});
    const UserSeeder = await User.insertMany(users);
    res.send({UserSeeder});

}) );

//Products Seed
router.post('/products', AsynHandler(async(req,res)=>{
    await Product.deleteMany({});
    const ProductSeeder = await Product.insertMany(products);
    res.send({ProductSeeder});

}));

module.exports = router;