const express = require('express');
const router = express.Router();
const salario = require('../models/salario')

router.get('/', async (req, res) => {
     const ingresos = await salario.find();
     console.log(ingresos);
     res.json(ingresos)
})

router.post('/', async (req, res) =>{
    let ingresoSalario = req.body;
    console.log(ingresoSalario);
    res.json(`Datos Recibidos`)
});

module.exports = router;
