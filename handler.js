//Esse arquivo será o responsável por exportar o event handler do lambda. Basicamente será a função que será executada assim que o lambda for chamado.

//para integração com o serverless framework e AWS

'use strict';

const app           = require('./app');
const serverless    = require('serverless-http')

module.exports.run = serverless(app);