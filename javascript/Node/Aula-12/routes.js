const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contotoController = require('./src/controllers/contatoController')

// rotas da home
route.get('/', homeController.paginaInicial);
route.get('/testes/:Nome?/:Sobrenome?', homeController.testes);
route.post('/', homeController.posts);

// rota de contato
route.get('/contato', contotoController.paginaDeContato);

module.exports = route;