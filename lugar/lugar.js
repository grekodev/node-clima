const axios = require('axios');

const getLugarLatLng = async(dir) => {
    let encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${encodeUrl}&key=8699eea5a69c448f89a6d45a23061fd9`,
        // headers: { 'X-Custom-Header': 'foobar' }
    });

    const resp = await instance.get();
    if (resp.data.results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.results[0];
    const direccion = data.formatted;
    const lat = data.geometry.lat;
    const lng = data.geometry.lng;

    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}