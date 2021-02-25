
var laboratorio1 = '<!DOCTYPE html><html lang = "es"><head> <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title>Cutberto. Mi primer Laboratorio</title> <meta name="description" content="Este es el laboratorio #1 "> </head><body> <h1> Laboratorio 1 </h1> <h1> Mi sitio web. Temática: videojuegos. </h1> <h2> Consolas de videojuegos de novena generación </h2> <p> Recientemente han sido lanzadas las consolas de novena generación, es decir, Xbox Series X|S y PlayStation 5. Este lanzamiento resulta en una apuesta mucho más interesante que la realizada en la generación pasada, ya que no se pretende ofrecer un rendimiento superior a lo observado en PCs de alto rendimiento, si no que se apuesta por ofrecer una relación calidad-precio sin precedentes. </p> <p> Microsoft con su Xbox Series S ha sorprendido, al ofrecer un rendimiento incomparable en la categoría de $299 USD, ya que con esta consola se obtiene un desempeño gráfico equiparable a equipos de sobremesa que sobrepasan los 500 USD. </p> <p> Uno de los principales atractivos de esta nueva generación es la implementación de Raytracing, una técnica de trazados de rayos mediante hardware especializado que permite ofrecer sombras y reflejos muy precisos, brindando un toque adicional de realismo gráfico a los videojuegos. </p> <br> <hr> <h2> Preguntas de laboratorio </h2> <h3>¿Cuál es la diferencia entre Internet y la World Wide Web?</h3> <p> Internet hace referencia a la red distribuida globalmente que permite interconectar millones de dispositivos entre sí, mientras que la WWW es una red de páginas web que se encuentra dentro del Internet, estas páginas son de dominio público. </p> <h3>¿Cuáles son las partes de un URL? </h3> <p> Protocolo (HTTP, HTTPS), subdominio, dominio, TLD, Ruta, Parámetro y Etiqueta </p> <h3>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</h3> <li> Get: Se utiliza para recuperar datos</li> <li> Head: Brinda los metadatos del documento</li> <li> Post: Envía datos al servidor. </li> <li> Put: Reemplaza un recurso determinado con el payload de la petición </li> <li> Patch: Modifica (parcha) un recurso seleccionado</li> <li> Delete: Elimina un recurso seleccionado</li> <p>Recuperado de <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods">MDN Web Docs. Métodos de petición HTTP. </a>el 8 de Febrero de 2021</p> <h3>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué? </h3> <p> Post, ya que estamos enviando los datos solicitados. </p> <h3>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</h3> <p> Se utiliza el método Get, ya que se hace la solicitud de datos (la página en sí es el dato solicitado). </p> <h3>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error? </h3> <p> Significa que todo ha salido bien. La petición realizada fue enviada y recibida correctamente. </p> <h3>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué? </h3> <p> No, ya que generalmente esto pasa cuando el cliente intenta acceder a secciones inexistentes de la página. </p> <h3>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</h3> <p> Sí, ya que este código de estado representa un error interno en el códio de la página. </p> <h3>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</h3> <p> Significa que previamente en protocolos HTML estos atributos eran utilizados, pero con los nuevos estándares HTML5 se debe evitar su uso, a pesar de que estén soportados todavía. Algunos ejemplos son las etiquetas div con identifiers, las etiquetas center, strike, frame, entre otras. </p> <h3>¿Cuáles son las diferencias principales entre HTML 4 y HTML5? </h3> <p> Que en HTML5 se decidió separar la estructura de la estética, ya que se deja todo el contenido de diseño bajo responsabilidad de CSS </p> <h3>¿Qué componentes de estructura y estilo tiene una tabla? </h3> <p> De acuerdo al portal htmlquick, una tabla en HTML5 cuenta con los siguientes elementos declarables: </p> <cite> <li> caption: proporciona el título de la tabla </li> <li> colgroup: agrupa columnas temáticamente </li> <li>tbody: representa a un cuerpo de la tabla </li> <li>thead: representa la sección de encabezado de la tabla</li> <li>tfoot: representa la sección de pie de la tabla</li> <li>tr: representa una fila. puede declararse como hijo de tbody, theadd, tfoot o table</li> <li>td: representa a una celda regular. se declara como hijo de tr </li> <li> th. representa a una celda de encabezado. solo se declara como hijo de tr</li> </cite> <p>Recuperado de <a href="https://www.htmlquick.com/es/reference/tags/table.html">HTMLQuick.com </a>el 8 de Febrero de 2021</p> <h3>¿Cuáles son los principales controles de una forma HTML5?</h3> <p> De acuerdo al portal aulaclic. es, son los siguientes: </p> <cite> <li> atributos comunes: como class, style o id </li> <li>method: es la forma de enviar los datos, ya sea get o post </li> <li> action: contiene como valor a dónde se enviarán los datos. </li> <li> fieldset: etiqueta que sirve para agrupar los controles</li> <li> legend: nos permite mostrar una leyenda</li> </cite> <p>Recuperado de <a href="https://www.aulaclic.es/paginas-web/a_11_1_2.htm">aulaclic.es </a>el 8 de Febrero de 2021</p> <h3>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda poner el navegador que utilizas) </h3> <p> Microsoft Edge 88 (Chromium) cuenta con 476 puntos, en su versión para Windows 10. </p><hr> <h3>Sobre el ciclo de vida y desarrollo de los sitemas de información: </h3> <h3>¿Cuál es el ciclo de vida de los sistemas de información? </h3> <p> Hace referencia a una serie de etapas por las que pasa un sistema a lo largo de su vida útil: Planificación, análisis, diseño, implementación, pruebas, despliegue y mantenimiento </p> <p>Recuperado de <a href="https://www.gestiopolis.com/ciclo-de-vida-de-un-sistema-de-informacion/">gestiopolis.com </a>el 8 de Febrero de 2021</p> <h3>¿Cuál es el ciclo de desarrollo de sistemas de información? </h3> <p> El SDLC, según el portal viewnext, es <cite> un método que facilita el desarrollo de los sistemas de información (...) sirve de soporte para que los gestores de un proyecto puedan planificar el proceso de diseño y puesta en marcha de cualquier sistema de información que deba reunir ciertos requisitos de cara a su usuario. </cite> </p> <p>Recuperado de <a href="https://www.viewnext.com/el-ciclo-sdlc-en-7-fases/">virenext.com </a>el 8 de Febrero de 2021</p><footer> <hr> <p> Actividad elaborada por Cutberto Arizabalo Nava. <br> Correo electrónico: A01411431@itesm.mx <br> Matrícula: A01411431 <br> Editor utilizado: Brackets. <br> <a href= http://brackets.io/ > Visita el sitio web de Brackets.io</a> </p> </footer> </body></html>';



const filesystem = require('fs');





const requestHandler = (request, response) => {
    console.log("hola desde el servidor");
    console.log(request.url);
        // pagina de inicio es la pagina del laboratorio 1
    if (request.url === "/inicio") {
        response.setHeader('Content-Type', 'text/html');
        response.write(laboratorio1);
        response.end();
        
        
    } else if (request.url === "/mensaje" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Mensaje super importante</title></head>');
        response.write("<body><h1>Introduce el mensaje super importante para el administrador</h1>");
        response.write('<form action="mensaje" method="POST"><input type="text" name="mensaje"><input type="submit" value="Enviar mensaje"></form>');
        response.write("</body>");
        response.write("</html>");
        response.end();
    } else if (request.url === "/mensaje" && request.method === "POST") {
        request.on('data', (dato) => {
            console.log(dato);
            filesystem.writeFileSync('input.txt', dato);
            response.write("<html> <h1> El mensaje super duper importante ha sido guardado para que el admin lo vea. siu </h1> </html>")
        });
        return request.on('end', () => {
            
            return response.end();
        });

    } else if (request.url === "/mapa") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Mapa de sitio</title></head>');
        response.write("<body><h1>Bienvenido al lab10! </h1> <h2> Las paginas disponibles son: </h2> <ul> <li>/inicio</li> <li>/mensaje</li> <li>/mapa</li> </ul>  </body>");
        response.write("</html>");
        response.end();
    }
     else if (request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
        response.write("<body><h1>Hola!!</h1> <p> ¿Perdido? prueba ir a /mapa para ver las direcciones disponibles! </p>  </body>");
        response.write("</html>");
        response.end();
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Page not found</title></head>');
        response.write("<body><h1>Page not found Error 400+4 (404).</h1></body>");
        response.write("</html>");
        return response.end();
    }   
}

module.exports = requestHandler;