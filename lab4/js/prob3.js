function contador( arreglo ) {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    for (let i = 0; i < arreglo.length; i++ ){
        if (arreglo[i] > 0){
            positivos++;
        } 
        else if (arreglo[i] < 0) {
            negativos ++;
        }
        else {
            ceros ++;
        }

    }
    let answer = [0,0,0];
    answer[0] = positivos;
    answer[1] = ceros;
    answer[2] = negativos;
    
    return answer;
}

//driver code
var tamanio = window.prompt("Introduce el número de elementos del arreglo a procesar");
let inputarray = [];
var tmptxt = "";
for (let i=0; i< tamanio; i++){ 
    tmptxt = "Introduce el numero con la posicion " + i + " en el arreglo.";
    inputarray.push(window.prompt(tmptxt));
}
var conteo = contador(inputarray);
tmptxt = "En el arreglo hay " + conteo[0] + " numeros positivos, " + conteo[1]+ " ceros y " + conteo[2] +" numeros negativos.";
window.alert(tmptxt);

document.write(tmptxt);