//json

var express = require('express');

var path = require('path');

var bodyparser = require('body-parser');


var app = express();


//body parser middle ware 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));



//set static path 
app.use(express.static(path.join(__dirname, 'public')));


var people =[

{
 name : 'divyajeet singh',
 age : 20

},

{
 name: 'dinesh kumar',
 age : 23

}



]



app.get('/', function(req , res){
// res.send('Hello world');

res.send(people);

});

app.listen(3000, function(){


	console.log("Hello world you  are here  3000 por is on");
})