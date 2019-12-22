const location = require('./controlador/ubicacion'); //se obtiene el modulo ubicacion con todos sus metodos
const clima = require('./controlador/clima'); //se obtiene el modulo clima con todos sus metodos
const axios = require('axios'); //se hace el llamado a la libreria axios

const argv = require('yargs').options({ //se utiliza el modulo yargs para configurar la entrada de parametros al programa
    nombre: {
        alias: 'n', //se usara -n para el definir el ingreso
        desc: 'nombre de la ciudad', //lo q se espera ingresar es el nombre de la ciudad
        demand: true //es de caracter obligatorio
    }
}).argv;


location.getCiudad(argv.nombre) //se muestra el resultado de la busqueda por pantalla
    .then(console.log);






clima.getClima(-0.19, -78.5).then(console.log);