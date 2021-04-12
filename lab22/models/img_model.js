const db = require('../util/database');

module.exports = class Imagen {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(imagen) {
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO personajes (nombre, imagen) VALUES (?, ?)',
            [this.nombre, this.imagen]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM personajes');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM personajes WHERE id=?', [id]);
    }

    static fetchByName(nombre) {
        return db.execute("SELECT * FROM `personajes` WHERE `nombre` LIKE ? ", ['%'+nombre+'%']);
    }

}