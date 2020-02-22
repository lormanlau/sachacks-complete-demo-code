const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

var port = 5000;

app.use('/static', express.static(path.join(__dirname, '../public')))

app.listen(port, function() { 
    return console.log(`Server running on ${port}`)
})