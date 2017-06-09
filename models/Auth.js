var db = require('../connection');
var LocalStrategy = require('passport-local').Strategy;


module.exports = function(passport){
    passport.serializeUser();
};