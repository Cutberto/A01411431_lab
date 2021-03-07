const express = require('express');

const router = express.Router();

const path = require('path');




const visitanteController = require('../controllers/visitante_controller');

router.get('/registrar', visitanteController.action);
router.post('/registrar', visitanteController.post);



module.exports = router;