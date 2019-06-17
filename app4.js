var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
/* 
app.post('/user', [
  check('username')
    // Every validator method in the validator lib is available as a
    // method in the check() APIs.
    // You can customize per validator messages with .withMessage()
    .isEmail().withMessage('must be an email')
 
    // Every sanitizer method in the validator lib is available as well!
    .trim()
    .normalizeEmail()
 
    // ...or throw your own errors using validators created with .custom()
    .custom(value => {
      return findUserByEmail(value).then(user => {
        throw new Error('this email is already in use');
      })
    }),
 
  // General error messages can be given as a 2nd argument in the check APIs
  check('password', 'passwords must be at least 5 chars long and contain one number')
    .isLength({ min: 5 })
    .matches(/\d/),
 
  // No special validation required? Just check if data exists:
  check('addresses.*.street').exists(),
 
  // Wildcards * are accepted!
  check('addresses.*.postalCode').isPostalCode(),
 
  // Sanitize the number of each address, making it arrive as an integer
  sanitize('addresses.*.number').toInt()
], (req, res, next) => {
  // Get the validation result whenever you want; see the Validation Result API for all options!
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }
 
  // matchedData returns only the subset of data validated by the middleware
  const user = matchedData(req);
  createUser(user).then(user => res.json(user));


*/
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


app.post('/users/add', [
  check('first_name').withMessage('must be your first name !').trim()

})
  




app.listen(3000, function(){
	console.log("server is started on 3000");
});
	