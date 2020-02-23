const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, '../public'), {index: false}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(request, response) {
    console.log(__dirname)
    response.sendFile(path.join(__dirname, "../public/index.html"));
})

app.get('/test/:pokemon', function(request, response) {
    console.log(request.params.pokemon)
    axios.get('https://pokeapi.co/api/v2/pokemon/' + request.params.pokemon)
    .then(function (result) {
        response.send({"results": result.data})
    })
    // response.send({"results": "Done"})
})

app.post('/grabsomething', function(req, res) {
    console.log(req.body)
    axios.get('https://pokeapi.co/api/v2/pokemon/' + req.body.input)
    .then(function (result) {
        res.send({"results": result.data})
    })
    // res.send({"results": "Done"})
})


app.listen("5000", function() { 
    console.log("Server running on 5000")
})