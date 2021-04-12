const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const laboratorios = require('./routes/laboratorios');

const mensaje = require ('./routes/mensaje');

const visitante = require ('./routes/visitantes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/laboratorios', laboratorios);


app.use('/visitantes', visitante);

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

 
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

  app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
    
  })

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
/*
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: () => (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

const fileFilter = (request, file, callback) => {
    if (file.mimetype == 'image/png' || 
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg' ) {
            callback(null, true);
    } else {
            callback(null, false);
    }
}
//var upload = multer({ storage: storage })

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('archivo')); 
const upload = multer({ storage: fileStorage, fileFilter: fileFilter }).single('archivo'); 
 */
app.use('/mensaje',mensaje);


app.use( (request, response, next) => {
    //response.statusCode = 404;
    response.status(404);
    response.send('Recurso no encontrado'); //Manda la respuesta
} );




app.listen(3000);