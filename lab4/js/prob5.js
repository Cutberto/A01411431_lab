
function inverso( numero ) {
 inverted = "";    
 for (let i = numero.length-1; i >= 0; i--) {
     inverted += numero[i];
 }
  
    return inverted;
    
}

//driver code 

let num = window.prompt("Inserta el numero a invertir");
let temptxt = "El resultado es: " + inverso(num);
let salida = document.getElementById("output");
salida.innerHTML = temptxt;