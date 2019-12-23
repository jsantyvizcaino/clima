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


const inicio = async() => { //se utiliza un callback asyncrono para poder utilizar las funciones
    //asyncronas de location y clima

    try {

        let ciudad = await location.getCiudad(argv.nombre); //la palabra reservada await permite que el flujo normal del programa se detenga hasta que la promesa se cumpla
        let lat = ciudad.lat;
        let lon = ciudad.lon;
        let nombre = ciudad.name;

        let temp = await clima.getClima(lat, lon); //la palabra reservada await permite que el flujo normal del programa se detenga hasta que la promesa se cumpla

        console.log(`El clima en la ciudad de ${nombre} es de ${temp} grados dentigrados`);

    } catch {

        console.log('error');
        return 'error';

    }



}

inicio(); //se invoca a la constante inicio