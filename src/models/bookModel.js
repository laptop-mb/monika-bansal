const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema ({
    bookName : String,
    authorName :  String , 
    catgory : String,
    year : Number,
}, {timestams : true}) 

module.exports = mongoose.model('book',bookSchema )