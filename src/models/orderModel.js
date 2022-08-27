const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
userId: ObjectId,
productId: ObjectId,
amount: Number,
isFreeAppUser: Boolean, 
date: String
},{ timestamps: true } )

mongoose.exports = mongoose.model('Order',orderSchema)