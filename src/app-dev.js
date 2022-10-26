require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//SETTINGS
app.set('PORT', process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan('dev'));
//app.use(express.json);

//ROUTES
app.use('/api/status', require('./routes/main-routes.js'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//SERVER & DB
const mongoose = require('mongoose');
mongoose.connect(process.env.MONG_URI)
    .then(()=> {
        app.listen(app.get('PORT'), () => {
            console.log(`Server running on port ${app.get('PORT')}`)
        });
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })


//ERROR HANDLER
