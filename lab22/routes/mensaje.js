const express = require('express');

const router = express.Router();

const path = require('path');




const msjsController = require('../controllers/mensaje_controller');

router.get('/enviar', msjsController.action);
router.post('/enviar', msjsController.post);
router.get('/fotos', msjsController.getArchivo);
//router.post('/fotos', msjsController.postArchivo);


module.exports = router;