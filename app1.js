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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//set stati path
//app.use(express.static(path.join(__dirname, 'public')));

/*
var person = [
    { name : "jeff",
      age: 30
    },
    {
       name: "bill",
       age : 40

    },
    {
    	name : "divyajeet singh",
    	age : 20
    },
    {
    	name : "Himanshu yadav",
    	age : 10
    }
]

*/

app.get('/',function(req, res , next){
	//	res.send('hello world');


	res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();

    res.json( [
    { name : "jeff",
      age: 30
    },
    {
       name: "bill",
       age : 40

    },
    {
    	name : "divyajeet singh",
    	age : 20
    },
    {
    	name : "Himanshu yadav",
    	age : 10
    }
]);  

});

data  =  `<ion-card-header>
    Card Header
  </ion-card-header>

  <ion-card-content>
    <!-- Add card content here! -->
  </ion-card-content>

</ion-card>`

data_html = data.html()

res.send(data_html);

app.listen(3000, function(){
	console.log("server is started on 3000");
});
