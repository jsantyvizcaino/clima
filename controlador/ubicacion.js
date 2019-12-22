const axios = require('axios'); //llamar al modulo instalado axios


const getCiudad = async(nombre) => { // se hace una funcion asincrona para que el programa espera a tener una ciudad y no cause errores
    const ciudad = encodeURI(nombre); // se hace que el parametro ingresado tome un formato especifico
    const instance = axios.create({ // con la ayuda de la documentacion de axios se configuran los headers
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`, //se le pasa la url que se puede encontrar en la api (Rapidapi)
        headers: { 'X-RapidAPI-Key': '4630e05840msh5c54c790f10a856p17189djsnce89d0411fe2' } //se colocan las claves que la api proporciona al registrase (Rapidapi)
    });

    const resp = await instance.get(); // se le dice q sera await ya que esta funcion tendra que esperar a que se resuelva la constante instance que al ser de tipo axios tiene el metodo get
    if (resp.data.Results.length === 0) { // se valida la respuesta si la ciudad no existe el tamano del vector resp sera 0 por lo tanto se lanza una excepcion
        throw new Error(`No existe resultados para ${nombre}`) // se devuelve un mensaje de error
    }
    const data = resp.data.Results[0]; // se crea la constante data la cual contiene todos los parametros devueltos por el metodo instance en la primera posicion
    const name = data.name; // el nombre de la ciudad
    const lat = data.lat; // la latitud
    const lon = data.lon; //la longuitud
    return { name, lat, lon } //el metodo getCiudad devuelve estos 3 parametros

}


module.exports = { // se exporta la funcion getCiudad al exterior
    getCiudad
}