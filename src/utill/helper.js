let date = new Date()

function printDate(){
    console.log(date.getDate())
}
function printMonth(){
    console.log(date.getMonth()+1)
}
function printBatch(){
    console.log(" plutonium, W3D3, the topic for today is Nodejs module system’")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.printBatch = printBatch

 