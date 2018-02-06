var http = require("http");
var express = require('express');
var app = express();
var path = require('path');
	
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   app.use('/css', express.static('css'));
   app.use('/js', express.static('js'));
   app.use('/js/icheck', express.static('js/'));
   app.use('/js/nicescroll', express.static('js/'));
   app.use('/js/progressbar', express.static('js/'));
   app.use('/js/pace', express.static('js/'));
   app.use('/fonts/css', express.static('fonts'));
   app.use('/fonts/fonts', express.static('fonts'));

   app.use('/img', express.static('img'));
   app.use(express.static('./views'));
   app.get('/',function(req, res) {
	res.sendFile(__dirname +'/views/starter.html');    
   });

   app.get('/api/route',function(req, res) {
	res.sendFile(__dirname +'/views/starter.html');    
   });
   
   // Send the response body as "Hello World"

app.listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');	