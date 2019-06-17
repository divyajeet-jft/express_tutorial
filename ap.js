var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();


app.get('/', function( req , res){

res.send('helloworld');

})
app.listen(8080, function(){

console.log("server is create at 3000");

})