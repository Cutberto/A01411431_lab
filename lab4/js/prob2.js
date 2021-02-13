var init_time = (new Date()).getTime();

var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);
var pregunta = "Introduce el resultado de la suma de " + num1 + " + " + num2;

var respuesta = window.prompt(pregunta);
//cuenta el tiempo que ha pasado desde que inició el programa hasta que se recibe la respuesta
var current_time = (new Date()).getTime();
var t = (current_time - init_time)/1000;

if (respuesta == num1+num2) {
    var answ = "La respuesta es correcta! Tardaste " + t + " segundos.";
}
else{
        var answ = "La respuesta es incorrecta... Tardaste " + t + " segundos.";
}
document.write(answ);