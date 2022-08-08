const _ =  require("lodash")

let monthsName = ['jan','feb','march','april','may','june','july','aug','oct','nov','dec']
console.log(_.chunk(monthsName, 3))

//================================================================//

let x = [1,3,5,7,9,11,13,15,17,19]
let oddNumberArray = _.tail(x)
console.log(oddNumberArray)

//==========================================================//

let array = ([1,2,2,], [2,3,3] ,[3,4,4], [4,5,5] ,[5,6,6])
let mergedArray = _.union(array)
console.log(mergedArray)

//===============================================================//

let  array2 = [ ["horror","the shinning"], ["drama","tatanic"], ["thrillar","shutter island"], ["fantasy", "pans labringth"]]
let objectArray = _.fromPairs(array2)
console.log(objectArray)

//================================================//c

