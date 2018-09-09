var express = require('express');
var path = require('path');

var todoRoutes = require('./api/routes/todoListRoutes');
var userRoutes = require('./api/routes/userRoutes');
var indexRoutes = require('./api/routes/index');

app = express();


port = process.env.PORT || 3000;
mongoose = require('mongoose');

// Create model loading here
Task = require('./api/models/todoListModel'); 
// Create User Loading here
User = require('./api/models/userModel');  

bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);

// app.use(function(req, res){
//     res.status(404).send({url: req.originalUrl + 'not found'})
// });

//var routes = require('./api/routes/todoListRoutes'); // importing route
todoRoutes(app); // register the routes
userRoutes(app);

app.listen(port);

console.log('todo List RESTful API server started on '  + port);