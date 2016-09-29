var express = require('express');
var app = express();
var middleware = require('./middleware.js')
var port = 3000;

app.use(middleware.logger);

app.get('/aboutus', middleware.requireAuthentication, function(req,res){
	res.send('Its about us page');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('Server running at '+port);
});