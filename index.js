'use strict'

var express = require('express')
var app = express()

app.get('/', function(req, res){
    //console.log(req.headers)
    var ua = req.headers['user-agent'].split(/\s*[;)(]\s*/);
    var al = req.headers['accept-language'].split(/\s*[,)(]\s*/);
    //console.log(ua)
    //console.log(al)
    var info = {'ipaddress': req.headers['x-forwarded-for'], 'language':al[0], 'software':ua[1]+"; "+ua[2]}
    res.json(info)
})

var port = process.env.PORT || 8081;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});