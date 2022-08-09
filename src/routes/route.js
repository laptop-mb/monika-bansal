const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

router.get("/movies", function(req,res){
    let moviesArray = ["3 iditos", "titanic","pk", "forest gump"]
    console.log(moviesArray)
    res.send(moviesArray)
})

router.get("/movies/:indexNumber", function(req,res){
    console.log("this request is "+JSON.stringify(req.params))
    console.log("indexNumber is", " " + req.params.indexNumber)
    res.send("done")
})

router.get("/shoes",function(req,res){
    let shoesQuery = req.query.shoes
    console.log(shoesQuery)
})

router.get("/films/:filmId" , function(req,res){
    let moviesArray2 = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let filmId = req.params.filmId
       for(let i=0; i<films.length; i++){
        let film = films[i]
        if(film.id==filmId){
            return res.send(film)
        }
       }
       res.send("the film id dosent match any movie")

       console.log(moviesArray2)
       res.send(moviesArray2)
          
})

module.exports = router;