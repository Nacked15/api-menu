var flash         = require('connect-flash');
var crypto        = require('crypto');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session       = require('express-session');
var Store         = require('express-session').Store;
var BetterMemoryStore = require(__dirname + '/memory');
var db = require('../connection');


module.exports = function(passport){
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((uid, done) => {
        db.query("SELECT * FROM users WHERE id="+id, (err, rows) => {
            done(err, rows[0]);
        });
    });


    // =============== LOGIN SIGNUP =============== \\
    passport.use('local-signup', new LocalStrategy({
        username : 'email',
        password : 'password',
        passReqToCallback : true
    },
    (req, email, password, done) => {
        db.query("SELECT * FROM users WHERE email = '"+email+"'", (err, rows) => {
            console.log(rows);
            console.log("Above row object");

            if (err) {
                return done(err);
            }

            if (rows.length) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {
                var newUser = new Object();

                newUser.email = email;
                newUser.password = password;

                var insertQuery = "INSERT INTO users (email, password) values('".+email+."', '".password."')";

                return db.query("INSERT INTO users(name, email, username, password) VALUES(?, ?, ?, SHA(?))",
                    [User.name, User.email, User.username, User.password], callback
                );
            }
        });
    }

    ));
};