const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema ({
    bookName : String,
    authorName :  String , 
    catgory : String,
    year : Number,
}, {timestams : true}) 

module.exports.bookSchema = mongoose.model("book",bookSchema )