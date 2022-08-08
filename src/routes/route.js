const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const logger = require("../logger/logger")
const helper = require("../utill/helper")
const formatter = require("../helper/formatter")


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    helper.printDate()
    helper.printMonth()
    helper.printBatch()

    let x = "    function up   "
    x = formatter.trim(x)
    formatter.changeToUpperCase()
    formatter.changeToLowerCase()

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason