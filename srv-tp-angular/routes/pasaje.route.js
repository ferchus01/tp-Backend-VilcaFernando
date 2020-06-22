const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const pasajeCtrl = require('../controllers/pasaje.controller');

// definiendo rutas
router.get('/', pasajeCtrl.getPasaje);
router.post('/', pasajeCtrl.crearPasaje);
router.put('/:id', pasajeCtrl.editPasaje);
router.delete('/:id', pasajeCtrl.deletePasaje);

//exportacion del modulo de rutas
module.exports = router;