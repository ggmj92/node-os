//Interfaz
//Dentro de cada interfaz habrá que sacar la Familia, Dirección e Interno
//Ejemplo de output: Interfaz lo0: Familia: IPv4 Dirección: 127.0.0.1 Interno: true Familia: IPv6 Dirección: ::1 Interno: true Familia: IPv6 Dirección: fe80::1 Interno: true // Interfaz en5: Familia: IPv6s Dirección: fe80::aede:48ff:fe00:1122 Interno: false

const os = require('os');

function getNetworkInfo() {
    const networkInterfaces = os.networkInterfaces();
    let result = {};

    for (let interface in networkInterfaces) {
        result[interface] = networkInterfaces[interface].map(info => ({
            Family: info.family,
            Address: info.address,
            Internal: info.internal
        }));
    }
    
    return result;

}

module.exports = getNetworkInfo;