const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2f6e9a0c87f0701deba12c49eb334b65`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}