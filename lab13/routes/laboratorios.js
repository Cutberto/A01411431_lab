const express = require('express');

const router = express.Router();

const path = require('path');

const labController = require('../controllers/labs_controller');


router.get('/laboratorio3' ,  labController.lab3  );
router.get('/laboratorio4' ,  labController.lab4  );
router.get('/laboratorio5' ,  labController.lab5  );
router.get('/laboratorio6' ,  labController.lab6  );
 



module.exports = router;