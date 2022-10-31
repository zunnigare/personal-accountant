const express = require('express');
const router = express.Router();
const salario = require('../models/salario')

router.get('/salario', async (req, res) => {
     const ingresos = await salario.find();
     console.log(ingresos);
     res.json(ingresos)
});

router.get('/salario/:id', async (req, res) => {
    const consulta = await salario.findById(req.params.id);
    res.json(consulta)
});

router.post('/salario', async (req, res) =>{
    const  { valor, periodicidadDePago } = req.body;
    const salarioConfiguracion = new salario({
        valor,
        periodicidadDePago
    })
    await salarioConfiguracion.save();
    res.json({status: 'Salario Guardado'})
});

router.put('/salario/:id', async (req, res) => {
    const  { valor, periodicidadDePago } = req.body;
    const nuevoSalario = {
        valor,
        periodicidadDePago
    }
    await salario.findByIdAndUpdate(req.params.id, nuevoSalario)
    res.json({status: 'Salario actualizado'})
})

router.delete('/salario/:id', async (req, res) =>{
    await salario.findByIdAndRemove(req.params.id);
    res.json({status: 'Salario Eliminado'})
});

module.exports = router;
