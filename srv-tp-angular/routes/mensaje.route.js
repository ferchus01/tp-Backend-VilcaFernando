const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const mensajeCtrl = require('./../controllers/mensaje.controller');

// definiendo rutas
router.get('/', mensajeCtrl.getMensaje);
router.post('/', mensajeCtrl.crearMensaje);
router.put('/:id', mensajeCtrl.editMensaje);
router.delete('/:id', mensajeCtrl.deleteMensaje);

//exportacion del modulo de rutas
module.exports = router;