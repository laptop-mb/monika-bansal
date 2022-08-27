
function trim(){
    let text = "    functionup    "
    let result = text.trim()
    console.log(result)
}
function changetoLowerCase(){
    let text2 = "FUNCTIONUP"
    let result2 = text2.toLowerCase()
    console.log(result2)
}
function changeToUpperCase(){
    let text3 = "functionup"
    let result3 = text3.toUpperCase()
    console.log(result3)
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase

