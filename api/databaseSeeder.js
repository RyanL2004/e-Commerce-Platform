const router = require('express').Router();
const User = require('./models/User');
const users = require('./data/Users');

router.post('/users', async(req,res)=>{
    await User.deleteMany({});
    const UserSeeder = await User.insertMany(users);
    res.send({UserSeeder});

});

module.exports = router;