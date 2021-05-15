const libExpress = require('express');

const app = libExpress();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/saludo', function(req, res){
    res.send('Holaaaaa');
})

app.get('/foto', function(req, res){
    res.sendFile(__dirname + '/img.gif');
})

app.listen(3100);
