//ARCHIVO PRINCIPAL "encargado de arrancar base de datos servidor y otras actividades"
require('dotenv').config(); //solo llamamos el metodo config del modulo dotenv, que solo lee el contendio dentro de un archivo .env en nuestro proyecto
const app = require('./server'); //TRAYENDO FUNCIONES DEL SERVIDOR SERVER.JS
require('./database');

app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'))
});