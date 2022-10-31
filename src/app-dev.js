require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//CONFIGURACIONES
app.set('PORT', process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//RUTAS
app.use('/api/', require('./routes/main-api.js'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//SERVIDOR Y BASE DE DATOS
mongoose.connect(process.env.MONG_URI)
    .then(()=> {
        //primero conecta a la base de datos y después carga el programa, esto puede cambiar.
        app.listen(app.get('PORT'), () => {
            console.log(`Servidor corriendo en el puerto: ${app.get('PORT')}`)
        });
    })
    .then(db => console.log('Base de datos Conectada')
    )
    .catch((error) => {
        console.log(`Error en la base de datos: ${error}`);
    })

    //MANEJO DE ERRORES
app.use((req, res, next) => {
    res.status(404);
});
