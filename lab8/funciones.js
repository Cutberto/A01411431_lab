
console.log("Hola desde node");

//fs: filesystem
const filesystem = require('fs');

//Imprimir el arreglo en orden con código asíncrono


function promedios(array ){
    let sumatemp = 0;
    let promedio = 0;
    for (let i = 0; i < array.length; i++ ){
        sumatemp += parseFloat(array[i]);
    }
    promedio = sumatemp / array.length;
    return promedio;
    
}


function escribir(string) {
    filesystem.writeFileSync('funcionEscribir.txt', string);}
    
function calcularPrecios(array){
    
    let subtotal = 0;
    let total = 0;
    for (let i = 0; i < array.length; i++ ){
        subtotal += parseFloat(array[i]);
    }
    total = parseFloat(subtotal) * 1.16;
    var resp = "El subtotal es de $" + subtotal + " y el total es de $"+ total;
    return resp;

    
}
    
    
    
//problema 1
console.log("Problema 1: Una función que reciba un arreglo de números y devuelva su promedio.");
const prompt = require('prompt-sync')({sigint: true});
let cant = prompt('Introduce la cantidad de numeros para el arreglo: ');
let arreglo1 = [];
for (let i = 0; i < cant ; i++) {
    arreglo1.push( parseFloat(prompt("Numero "+(i+1)+": ")) ) ;
}
let promedio = promedios(arreglo1);
console.log("El promedio de ese arreglo es: "+promedio);

//problema 2
console.log("Problema 2: Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.");

let palabra = prompt('Introduce el string para guardar en el archivo funcionEscribir.txt: ');
escribir(palabra);
//problema 3
console.log ("Problema 3 Sistema de compras que calcula el iva.  ");
cant = prompt('Introduce la cantidad de productos a comprar: ');
let arreglo2 = [];
for (let i = 0; i < cant ; i++) {
    arreglo2.push( parseFloat(prompt("Precio sin iva del producto "+(i+1)+": ")) ) ;
    
}
var texto = calcularPrecios(arreglo2);
console.log (texto);
    