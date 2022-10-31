const mongoose = require('mongoose');
const { Schema } = mongoose;

const salario = new Schema({
    valor: { type: Number, required: true },
    periodicidadDePago: { type: Number, required: true }
})

module.exports = mongoose.model('salario', salario);
