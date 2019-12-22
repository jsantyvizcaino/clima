const axios = require('axios'); //llamar al modulo instalado axios


const getClima = async(lat, long) => { //creacion de la funcion flecha de tipo asyncrona que recibe 2 parametros la longuitud y la latitud
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4645dc5c0f55f44b894afc86f2815ca6&units=metric`); //esta constante guarda los datos que devuelve el metodo axis.get, al ser await el proceso se de
    //se detendra aqui hasta q se haya dado una respuesta
    //se usa la aplicacion openweathermap.org      
    return resp.data.main.temp; // se devolveran estos datos como respuesta del metodo clima
}

module.exports = { // se exporta la funcion getCiudad al exterior
    getClima
}