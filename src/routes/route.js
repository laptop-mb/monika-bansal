const express = require('express');
const router = express.Router();
const lodash =  require("lodash")

router.get('/test-me', function (req, res) {
    
let monthsName = ['jan','feb','march','april','may','june','july','aug','oct','nov','dec']
console.log(lodash.chunk(monthsName, 3))

//================================================================//

let x = [1,3,5,7,9,11,13,15,17,19]
let oddNumberArray = lodash.tail(x)
console.log(oddNumberArray)

//==========================================================//

let array = ([1,2,2,], [2,3,3] ,[3,4,4], [4,5,5] ,[5,6,6])
let mergedArray = lodash.union(array)
console.log(mergedArray)

//===============================================================//

let  array2 = [ ["horror","the shinning"], ["drama","tatanic"], ["thrillar","shutter island"], ["fantasy", "pans labringth"]]
let objectArray = lodash.fromPairs(array2)
console.log(objectArray)

//================================================//
    res.send('My second ever api!')
});


module.exports = router;