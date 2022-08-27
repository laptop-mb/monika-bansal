const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")


let createOrder = async function(req,res){
    let userId = req.body.userId
    let productId = req.body.productId
    if(!userId){
       return  res.send("plz enter a valid userId")
    }
    if(!productId){
       return  res.send("plz enter a valid productId")
    }
    let validUser = await userModel.findById(userId)
    if(!validUser){
        return res.send("the user is not valid")
    }
    let validProduct = await productModel.findById(productId)
    if(!validProduct){
        return res.send("the product is not valid")
    }else if(req.headers.isfreeappuser==="true"){
        let orderData = req.body
        orderData.amount = 0
        orderData.isfreeappuser = true
        await orderModel.create(orderData)
        return res.send({msg:"order purchased successfully"})
    }
    else{
        let userBalance = validUser.userBalance
        let productPrice = validProduct.price
        if(productPrice<=userBalance){
            let remainBalance = userBalance-productPrice
            await userModel.updateOne({_id:userId},{$set:{balance:remainBalance}})
            let orderData = req.body
            orderData.amount = productPrice
            orderData.isfreeappuser = false
            await orderModel.create(orderData)
            res.send({msg:"orderPurchased succesfully"})
        }
        else{
            res.send({msg:"user dosent have enough balance", status:false})
        }
    }

}

module.exports.createOrder = createOrder