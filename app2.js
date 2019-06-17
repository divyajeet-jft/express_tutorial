var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

/*
var logger = function(req, res, next){
	console.log('logging...');
	next();
}

app.use(logger);

*/

//body parser middileware 

//view engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//set stati path
app.use(express.static(path.join(__dirname, 'public')));



app.get('/',function(req, res){
	res.send('hello world');

  //  res.json(person);  

});

app.listen(3000, function(){
	console.log("server is started on 3000");
});
