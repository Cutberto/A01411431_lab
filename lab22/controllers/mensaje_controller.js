const mensajes = require('../models/msj_model');

//Para crear un objeto de nuestro modelo
const listaMsjs = new mensajes();


//Para recuperar la lista de objetos del modelo
//Para recuperar la lista de objetos del modelo
const lista = listaMsjs.fetchAll();
                    

exports.action = (request, response, next) => {
    response.render('mensaje', { 
        arreglo: lista,  
        
    });
};


exports.post = (request, response, next) => {
    request.on('data', (dato) => {
        console.log(dato);
        listaMsjs.save(dato);
        
     response.send('<html> <h1> El mensaje super duper importante ha sido guardado para que el admin lo vea. siu </h1> <a href ="/mensaje/enviar">Volver </a> </html>');
    });
};

exports.getArchivo = (request, response, next) => {
    response.render('subirFotos');
};

/*
exports.postArchivo = (request, response, next) => {
    
    const image = request.file;
    console.log(image);

    if(!image) {
        console.error('Error al subir la imagen');
        return response.status(422).redirect('/');
    }

    const nueva_imagen = new Imagen(image.filename);
    nueva_imagen.save()
        .then(() => {
            response.redirect('/mensaje');
        }).catch(err => console.log(err));

}
*/

exports.postArchivo = (request, response, next) => {
    const image = request.archivo;
    console.log(image);
    console.log(request.body);

    if(!image) {
        console.error('Error al subir la imagen');
        return response.status(422).redirect('/');
    }

    response.send(image);

};
     
