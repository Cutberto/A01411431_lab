const lista =[];
module.exports = class mensajes {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor() {
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save(mensaje) {
        lista.push(mensaje);

    }



    //Este método servirá para devolver los objetos del almacenamiento persistente.
     fetchAll() {
        return lista;
    }

}