const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    //user pr0viding a review
},{ timestamps: true}
);

//validate password match or not 
// Creating custom mongoose matchPassword method for check
userSchema.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)

    
}

module.exports = mongoose.model('User', userSchema);