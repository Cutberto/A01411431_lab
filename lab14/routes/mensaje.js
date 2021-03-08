const express = require('express');

const router = express.Router();

const path = require('path');




const msjsController = require('../controllers/mensaje_controller');

router.get('/enviar', msjsController.action);
router.post('/enviar', msjsController.post);



module.exports = router;