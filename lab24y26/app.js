/*  ***************************************
    app.js
    laboratorio 24 y 26, implementación 
    de ajax con express usando archivos
    json

    ***************************************
*/ 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('./public'));



app.get('/inicio', (request, response) =>{

    response.sendFile(path.join(__dirname, '/peliculas.html'));
});

app.post('/new', (request, response) =>{
    response.setHeader('Content-type', 'text/plain');
    const nombre = request.body.nombre;
    const rating = request.body.rating;

    let file = fs.readFileSync('./peliculas.json', 'UTF-8');
    const json = JSON.parse(file);
    json.peliculas.push({'nombre': nombre, 'rating': parseInt(rating)});
    file = fs.writeFileSync('./peliculas.json', JSON.stringify(json));
    response.setHeader('Content-type', 'html/plain');
    response.send('La película se ha guardado!');

});

app.get('/get-peliculas', (request, response) =>{
    const file = fs.readFileSync('./peliculas.json', 'UTF-8');
    response.setHeader('Content-type', 'text/json');
    response.send(file);
});

app.listen(3000, () =>{
    console.log('A01411431');
})