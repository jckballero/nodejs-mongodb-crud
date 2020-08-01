//CODIGO DEL SERVIDOR
const express = require('express');
const path = require('path');
//INICIALIZACIONES
const app = express();

//CONFIGURACIONES
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARES
app.use(express.urlencoded({ extended: false })); //soporta datos (json) transformando peticiones del cliente al servidor

//VARIABLES GLOBALES (VARIABLES QUE PODEMOS UTILIZAR EN TODO EL PROYECTO)


//ROUTES
app.get('/', function(req, res) {
    res.send('Hello World!');
});

//ARCHIVOS STATICOS
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app; //IMPORTANDO A INDEX