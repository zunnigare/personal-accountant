const mongoose = require('mongoose');
const { Schema } = mongoose;

const salario = new Schema({
    valor: { type: Number, required: true },
    diaDePago: { type: Number, required: true }
})

module.exports = mongoose.model('salario', salario);
