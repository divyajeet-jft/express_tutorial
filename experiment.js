var express = require('express');

var path = require('path');

var bodyparser = require('body-parser');


var app = express();


//body parser middle ware 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));



//set static path 
app.use(express.static(path.join(__dirname, 'public')));

var  x = "google is my frinds ";
app.get('/:tagId', function(req , res){


 res.send("Hello user"+ req.params.tagId);


});

app.listen(3000, function(){


	console.log("Hello world you  are here  3000 por is on");
})