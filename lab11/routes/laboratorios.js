const express = require('express');

const router = express.Router();

const path = require('path');



router.get('/laboratorio3', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..' ,  'views', 'lab3.html'));
});

router.get('/laboratorio4', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..' ,  'views', 'lab4_preguntas.html'));
});


router.get('/laboratorio6', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..' ,  'views', 'lab6.html'));
});

router.get('/laboratorio5', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..' ,  'views', 'preguntas_lab5.html'));
});






module.exports = router;