const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, '../public')))

app.listen("5000", function() { 
    return console.log("Server running on 5000")
})