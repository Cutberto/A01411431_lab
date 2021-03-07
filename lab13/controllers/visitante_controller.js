const visitantes = require('../models/visitantes_model');

//Para crear un objeto de nuestro modelo
const listaVisitantes = new visitantes();


//Para recuperar la lista de objetos del modelo
//Para recuperar la lista de objetos del modelo
const lista = listaVisitantes.fetchAll();
                    

exports.action = (request, response, next) => {
    response.render('visitantes', { 
        arreglo: lista,  
        
    });
};


exports.post = (request, response, next) => {
    request.on('data', (dato) => {
        console.log(dato);
        listaVisitantes.save(dato);
        
     response.send('<html> <h1> Felicidades estás registrado! </h1> <a href ="/visitantes/registrar">Volver </a></html>');
    });
};


