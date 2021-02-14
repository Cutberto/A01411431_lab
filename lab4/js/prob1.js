window.alert("hola");

function genera_tabla(limite) {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("sol1")[0];

  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea las celdas
  for (var i = 1; i <= limite; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 1; j < 4; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(Math.pow(i,j));
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  sol1.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}
var btn1 =  document.getElementById("btn1");
btn1.onclick = () => {
var limit = window.prompt("Introduce el número de elementos en la tabla");
    let sol1 = document.getElementById("sol1");
    genera_tabla(limit);
}

