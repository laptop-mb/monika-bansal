
const bookModel = require("../models/bookModel")
// const  getBooksModel = require("../models/bookModel.js")

const createBook = async function(req,res){
    let data2 = req.body
    let savedData2 = await  bookModel.create(data2)
    res.send({msg: savedData2})

}

const getBooksData = async function(req,res){
let allBooks = await bookModel.find()
res.send({msg: allBooks})
}

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;