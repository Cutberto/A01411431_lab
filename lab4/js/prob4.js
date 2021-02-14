
function promedios( matriz ) {
    var ncolumnas = matriz[0].length;
    var nfilas = matriz.length;
    
    let sumatemp = 0;
    let promediotemp = 0;
    
    var resp = [];

    for (var i = 0; i < nfilas; i++ ){

        sumatemp = 0;
        for (let j = 0; j < ncolumnas; j++){
             sumatemp += matriz[i][j];
            //sumatemp++;
        }
        promediotemp = sumatemp / ncolumnas;
        resp.push(promediotemp);
    }
    return resp;
    
  
    
    
   // return [ncolumnas,nfilas];
}

//driver code 
let proms = [];
proms.push([10,8,7,8]);
proms.push([10,10,10,10]);
proms.push([10,10,5,5]);
proms.push([10,8,7,8]);

let respuesta = promedios(proms);
let salida = document.getElementById("output");
let temptxt = "El promedio de cada fila de la matriz <br> ";
    var ncolumnas = proms[0].length;
    var nfilas = proms.length;
for (let i = 0; i < nfilas; i++ ){
        temptxt+= "[";
        for (let j = 0; j < ncolumnas; j++){
            temptxt += proms[i][j];
            temptxt += ", ";
        }
        temptxt += "]<br>";
    }
temptxt += "es de: <br> ";

for (let i = 0; i < respuesta.length ; i++) {
    temptxt += "[";
    temptxt += respuesta[i];
    temptxt += "] <br>";
    
}

salida.innerHTML = temptxt;