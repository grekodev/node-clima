const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
// argv.direccion

// getClima(-6.4877198, -76.3598708)
//     .then(console.log)
//     .catch(err => console.log(err));

// getLugarLatLng(argv.direccion)
// .then(console.log)

const getInfo = async(direccion) => {
    try {
        const coord = await getLugarLatLng(direccion);
        const temp = await getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temp}`;
    } catch (e) {
        return `No se puedo determinar el clima ${direccion}`;
    }
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(err => console.log(err));