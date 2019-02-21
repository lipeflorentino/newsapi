//este arquivo contém as especificações do servidor Express
// adicionando o módulo para habilitar CORS
// Helmet para aplicar uma camada de segurança nas requisições recebidas 
// Body Parser para popularmos o body das requests 
// consign para fazer o require das rotas

'use strict';

const express = require('express'),
app           = express(),
bodyParser    = require('body-parser'),
helmet 	      = require('helmet'),
cors          = require('cors'),
consign       = require('consign'),
conn          = require('./config/db_connection.js'),
port          = process.env.PORT || 3000;

//informando ao app qual porta escutar
app.listen(port);
console.log('RESTful API - Webedia server started on: ' + port);

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importando as rotas da aplicação
const routes = require('./routes/newsRoutes'); 

//registrando a rota
routes(app); 

//usando o consign para fazer o require das rotas 
consign()
    .include('routes')
    .into(app);

module.exports = app;