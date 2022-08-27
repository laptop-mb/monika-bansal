const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const logger = require("../logger/logger")
const helper = require("../utill/helper")
const formatter = require("../validator/formatter")


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    helper.printDate()
    helper.printMonth()
    helper.printBatch()

    formatter.trim()
    formatter.changetoLowerCase()
    formatter.changeToUpperCase()
 
    res.send('My second ever api!')
});

module.exports = router;
// adding this comment for no reason