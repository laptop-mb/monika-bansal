const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")
const productController = require('../controllers/productController')
const OrderController = require("../controllers/orderController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createUser", UserController.createUser)
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

router.post("/createProduct",productController.createProduct)
router.post("/createUser2", commonMW.mid1 ,UserController.createUser2)
router.post("/createOrder", commonMW.mid1 ,OrderController.createOrder)

// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)

module.exports = router;


// //sum of arrays..
// const func = function(arr){
//     let sum =0
//     // console.log(arr.,'hi')
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//         //sum = sum+arr[i]
//        // console.log(arr[i])
//     }
//     //console.log(sum)
//     return sum
// }

//  const arr = [1,2,3,4,5]

//  const result = func(arr)
// console.log(result)

// //Prime Numbers..
// // can be divided by 1 and itself ..
// // 111
// // 1 < 2,,3,4,5,6,7,8,9,10 ,.....,111 > 112
// // 15%10==?
// // console.log(15%7)
// const func2  =function(n){
//     //code here
//     for(let i=2;i<n;i++){
//         if(n%i==0)return i
//     }
//     return 1
// }

// const n =11
// const result = func2(n)
// console.log(result)

// //reverseArray
// const func3 =function(arr){
//     let reverseArr =[]
//     //for(intionlization;Condition;increment/Decrement)
//     //initialization we can declare multiple variables
//     //condition we can give  multiple condition usin( && , || ) Operator
//     //we can increment /decrement multiple times
//     for(let )
//     for(let i=arr.length-1, j=0;i>=0;j++,i--){
//         reverseArr[j] = arr[i]
//     }
//     return reverseArr
// }

// const arr = [1,2,3,4,5]
// const result = func3(arr)
// console.log(result)
