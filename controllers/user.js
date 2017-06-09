'use strict'

var path = require('path');
var User = require('../models/User.js');

function getUser(req, res){
    var userId = req.params.id;

    User.getUser(userId, (err, user) => {
        if (err) {
            // res.json(err);
            res.status(500).send({message: 'Error en la petición.'});
        } else {
            // res.json(user);
            if (!user) {
                rest.status(404).send({message: 'El usuario no existe.'});
            } else {
                res.status(200).send({user});
            }
        }
    });
}

function getUsers(req, res){
    User.getAllUsers((err, users) => {
        if (err) {
            // res.json(err);
            res.status(500).send({message: 'Error en la petición.'});
        } else {
            // res.json(user);
            if (!users) {
                rest.status(404).send({message: 'No hay Usuarios.'});
            } else {
                res.status(200).send({users});
            }
        }
    });
}

function saveUser(req, res) {
    var params = req.body;

    User.addUser(params, (err, count) => {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
}

function updateUser(req, res){
    var userId = req.params.id;
    var params = req.body;

    User.updateUser(userId, params, (err, user)=> {
        if (err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
}

function deleteUser(req, res){
    var userId = req.params.id;

    User.deleteUser(userId, (err, userRemoved) => {
        if (err) {
            res.status(500).send({message: 'Error al eliminar el usuario'});
        } else {
            if (!userRemoved) {
                res.status(404).send({message: 'No se ha eliminado el usuario'});
            } else {
                res.status(200).send({user: userRemoved});
            }
        }
    });
}

module.exports = {
    getUser,
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}