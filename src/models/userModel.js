const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
	balance:Number, // Default balance at user registration is 100
	address:String,
	age: Number,
 	gender:String,  // Allowed values are - “male”, “female”, “other”
	isFreeAppUser: false // Default false value.
}, { timestamps: true });

module.exports = mongoose.model('UserProduct', userSchema) //users



// String, Number
// Boolean, Object/json, array