var db = require('../connection');

var User = {
    getAllUsers: (callback) => {
        return db.query('SELECT * FROM users', callback);
    },

    getUser: (id, callback) => {
        return db.query("SELECT * FROM users WHERE id=?", [id], callback);
    },

    addUser: (User, callback) => {
        return db.query("INSERT INTO users(name, email, username, password) VALUES(?, ?, ?, SHA(?))",
            [User.name, User.email, User.username, User.password], callback
        );
    },

    updateUser: (id, User, callback) => {
        return db.query("UPDATE users SET name=?, email=?, username=?, password=SHA(?) WHERE id=?",
            [User.name, User.email, User.username, User.password, id], callback
        );
    },

    deleteUser: (id, callback) => {
        return db.query("DELETE FROM users WHERE id=?", [id], callback);
    }

};

module.exports = User;