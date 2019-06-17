var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var expressvalidator = require('express-validator');
var expresssession =  require('express-session');
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

app.use(expressvalidator());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(expresssession({secret: 'max', saveuninitialized: false, resave: false}));
var users =[
{   id : 1,
	first_name : 'john',
	last_name : 'doe',
	email : 'johndoe@gmail.com',
},
{
   id : 2,
   first_name : 'jill',
   last_name : 'jackson',
   email :'jjackson@gmail.com',

}

]


app.get('/',function(req, res){
var Customers = 'List of customer here';
   res.render('index', {
   	title: Customers,
   	users : users
   });

//	res.send('hello world');

  //  res.json(person);  

});


app.post('/users/add', function(req, res){

console.log(req.body.first_name);
console.log(req.body.last_name);
console.log(req.body.email);
/*
req.body.check('first_name', 'Invalid first name ').isAlphanumeric();
req.check('last_name', 'Inavlid Last name ').isAlphanumeric();
req.check('email', 'Inavlid email address').isEmail();
var  error  = req.validationErrors;
if(error){

  console.log(error);
}
res.redirect('/');
*/

var newuser = {
  first_name: req.body.first_name,
  last_name: req.body.last_name,
  email: req.body.email









}

console.log(newuser);





});


app.listen(3000, function(){
	console.log("server is started on 3000");
});
	