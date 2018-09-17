///////7
const axios = require('axios');


//AIzaSyBL97zU19qiNPM5gBNLkun_inUT6dOlGD0

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBL97zU19qiNPM5gBNLkun_inUT6dOlGD0`)

    if (result.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la direccion ${direccion}`);
    }

    let address = result.data.results[0].formatted_address;
    let lat = result.data.results[0].geometry.location.lat;
    let lng = result.data.results[0].geometry.location.lng;

    // console.log(JSON.stringify(result.data, undefined, 2));        


    return {
        direccion: address,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}