'use strict'

var express = require('express')
var app = express()

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', function(req, res){
    res.send('Go to /api/whoami for functionality')
})

app.get('/api/whoami', function(req, res){
    //console.log(req.headers)
    var ua = req.headers['user-agent'].split(/\s*[;)(]\s*/);
    var al = req.headers['accept-language'].split(/\s*[,)(]\s*/);
    //console.log(ua)
    //console.log(al)
    var info = {'ipaddress': req.headers['x-forwarded-for'], 'language':al[0], 'software':ua[1]+"; "+ua[2]}
    res.json(info)
})

var port = process.env.PORT || 8082;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});