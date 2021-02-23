const express = require('express');
const app = express();


app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!si ok si'); //Manda la respuesta
});

app.listen(3000);