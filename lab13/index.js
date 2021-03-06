const express = require('express');
const app = express();
const path = require('path');

const laboratorios = require('./routes/laboratorios');

const mensaje = require ('./routes/mensaje');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/laboratorios', laboratorios);

app.use('/mensaje',mensaje);

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));



                   
app.use( (request, response, next) => {
    //response.statusCode = 404;
    response.status(404);
    response.send('Recurso no encontrado'); //Manda la respuesta
} );

app.listen(3000);