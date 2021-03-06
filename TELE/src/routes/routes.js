const express = require('express');
const routes = express.Router();
const Usuario = require('../controller/usuario.controller');

routes.get('/',Usuario.index);
//Rotas de Usuarios
routes.post('/api/usuarios',Usuario.create);
routes.get('/api/usuarios',Usuario.index);
routes.get('/api/usuarios.details/:_id',Usuario.details);
routes.delete('/api/usuarios/:_id',Usuario.delete);
routes.put('/api/usuarios/', Usuario.update);



  module.exports = routes;