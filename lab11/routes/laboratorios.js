const express = require('express');

const router = express.Router();

const path = require('path');



router.get('/laboratorio3', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..' ,  'views', 'lab3.html'));
});

router.post('/mensaje', (request, response, next) => {
    response.send('xd');
});


module.exports = router;