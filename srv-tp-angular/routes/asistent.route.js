const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const AsistenteCtrl = require('./../controllers/asistente.controller');

// definiendo rutas
router.get('/', AsistenteCtrl.getAsistente);
router.post('/', AsistenteCtrl.crearAsistente);

router.put('/:id', AsistenteCtrl.editAsistente);
router.delete('/:id', AsistenteCtrl.deleteAsistente);

//exportacion del modulo de rutas
module.exports = router;