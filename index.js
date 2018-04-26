let http = require('http'),
    fs = require('fs'),
    express = require('express'),
    path = require('path'),
    app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/dist/", express.static(__dirname + '/dist'));
app.use("/dist/img", express.static(__dirname + '/dist'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(8030, function () {
    console.log('Example app listening on port 8030!');
});