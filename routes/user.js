'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

//Para la carga de archivos/imagenes
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads' });

api.get('/user/:id', UserController.getUser);
api.get('/users', UserController.getUsers);
api.post('/user', UserController.saveUser);
api.put('/user/:id', UserController.updateUser);
api.delete('/user/:id', UserController.deleteUser);
// api.post('/upload-image/:id', multipartMiddleware, ImageController.uploadImage);
// api.get('/get-image/:imageFile', multipartMiddleware, ImageController.getImageFile);


module.exports = api;