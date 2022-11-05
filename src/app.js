const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//CONFIGURACIONES
app.set('PORT', process.env.PORT || 3000);