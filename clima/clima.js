///////7
const axios = require('axios');

const getClima = async(lat, lng) => {
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}5&lon=${lng}&appid=3ed68a947a01ae1f85f53111bf61ecfb&units=metric`)

    return result.data.main.temp;
}

module.exports = {
    getClima
}