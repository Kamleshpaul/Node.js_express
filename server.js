var express = require('express'),
  app = express(),
  port = process.env.PORT || 4200,
  mongoose = require('mongoose'),


//created model loading here
  Task = require('./api/models/todoListModel'), 
  User = require('./api/models/UserModel'), 
//created model End here


  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing route
let  routes = require('./api/routes/todoListRoutes'); 
var userRoute = require('./api/routes/UserRoutes'); 
//importing route end

 //register the route
routes(app);
userRoute(app); 
//register the route end


app.listen(port);


console.log('RESTful API server started on: ' + port);
