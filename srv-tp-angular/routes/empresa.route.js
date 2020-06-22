const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const empresaCtrl = require('./../controllers/empresa.controller');

// definiendo rutas
router.get('/', empresaCtrl.getEmpresa);
router.post('/', empresaCtrl.crearEmpresa);
router.put('/:id', empresaCtrl.editEmpresa);
router.delete('/:id', empresaCtrl.deleteEmpresa);

//exportacion del modulo de rutas
module.exports = router;