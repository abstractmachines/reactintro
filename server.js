"use strict"

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'))

app.get('/', function(req,res){
	res.send(path.resolve(_dirname,'public','index.html'));
});

app.listen(3000, function(){
	console.log('listening on port 3000 yay!');
});
