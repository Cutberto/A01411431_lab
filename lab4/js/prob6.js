function calcArea(h,w){
    return (h*w);
}
function calcPer(h,w){
    return (2*h+2*w);
}

function rectangle(height,width) {
    this.heigth = height;
    this.width = width;
    this.calcArea = calcArea(height,width);
    this.calcPer = calcPer(height,width);
}
 

var base = window.prompt("Introduce la base del rectangulo");
var altura = window.prompt("Introduce la altura del rectangulo");

var rectanguloUsuario = new rectangle(altura, base);
 

var area = rectanguloUsuario.calcArea;
var perimetro = rectanguloUsuario.calcPer;



var temptxt = "El area del rectangulo es de " + area + " unidades y el perimetro es de " + perimetro + " unidades." ;
let salida = document.getElementById("output");
salida.innerHTML = temptxt;