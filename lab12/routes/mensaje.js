const express = require('express');

const router = express.Router();

const path = require('path');


const arreglo=[];

router.get('/enviar', (request, response, next) => {


    response.render('mensaje' , {arreglo:arreglo});
});


router.post('/enviar', (request, response, next) => {
    request.on('data', (dato) => {
        console.log(dato);
        arreglo.push(dato);
        
     response.send("<html> <h1> El mensaje super duper importante ha sido guardado para que el admin lo vea. siu </h1> </html>");
    });
  
  
});


module.exports = router;