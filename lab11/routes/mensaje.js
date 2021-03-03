const express = require('express');

const router = express.Router();

const path = require('path');

const filesystem = require('fs');



router.get('/enviar', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');


    response.send( '  <html> <head><meta charset="UTF-8"><title>Mensaje super importante</title></head>  <body><h1>Introduce el mensaje super importante para el administrador</h1>  <form action="enviar" method="POST"><input type="text" name="mensaje"><input type="submit" value="Enviar mensaje"></form>  </body> </html>'     );
});


router.post('/enviar', (request, response, next) => {
    request.on('data', (dato) => {
        console.log(dato);
        filesystem.writeFileSync('mensajeGuardado.txt', dato);
        response.send("<html> <h1> El mensaje super duper importante ha sido guardado para que el admin lo vea. siu </h1> </html>");
    });
  
  
});


module.exports = router;