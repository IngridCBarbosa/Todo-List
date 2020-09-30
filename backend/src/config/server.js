const bodyParser = require('body-parser');
const express = require('express');


const server = express();
const port = '3333';

server.use(bodyParser.urlencoded({extended: true}));


server.listen(port, function() {
    console.log('Backend está rodando na porta '+port)
})