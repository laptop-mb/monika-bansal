const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    year: {type:Number, default:2021},
    totalPages: Number,
    stockAvailable: Boolean,
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

// let arr=  [ 1,2,3,4,5,7]
// for(let i=0; i<arr.length; i++){
//     arr[0]+1==arr[1]
// }




//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
