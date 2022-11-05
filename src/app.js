require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//CONFIGURACIONES
app.set('PORT', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//RUTAS
//Rutas de API
app.use('/api/', require('./routes/main-api.js'));

//Rutas de navegación

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));