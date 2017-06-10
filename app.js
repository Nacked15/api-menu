'use strict'

var express    = require('express');
var bodyParser = require('body-parser');
var passport      = require('passport');
var session       = require('express-session');
var Store         = require('express-session').Store;
var flash         = require('connect-flash');
var BetterMemoryStore = require(__dirname + '/memory');
var app = express();

var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true});

//Set the session name and the session secret
app.use(session({
    name: 'JSESSION',
    store: store,
    secret: 'SUDOSECRETTXT',
    resave: true,
    saveUninitialized: true
}));

//Initialize the Passport module 
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


//Routes
var user_routes = require('./routes/user');
// var image_routes = require('./routes/image');


//Bodyparse config
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cabeceras
// app.use((req, res, next) =>{
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');

//     next();
// });

//Rutas base
app.get('/', function (req, res) {
    res.send('Node Server is running...');
});
app.use('/api', user_routes);
// app.use('/api', image_routes);


module.exports = app;