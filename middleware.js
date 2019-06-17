//middle ware important role for security


var express= require('express');

var path = require('path');

var bodyparser = require('body-parser');

var app  = express();



 var logger  = function( req , res, next){

 	console.log('logging');
 	next();
 }

 app.use(logger);
app.get('/', function(req , res){


res.send('helll world');

});



app.listen( 3000 , function(){



	console.log("the server started at port no  30000");
})