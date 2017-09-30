var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
    console.log('fuck');
});

app.get('/process_get', function(req, res) {
    resquest = {
        first_name : req.query.first_name,
        last_name : req.query.last_name,
    };
    res.end(JSON.stringify(resquest));
});

app.post('/process_post', urlencodedParser, function(req, res) {
    response = {
        first_name : req.query.first_name,
        last_name : req.query.last_name,
    };
    res.end(JSON.stringify(response));
});


var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
