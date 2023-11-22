const haversine = require('haversine-distance')

function calcularDistanciaKm(loacalizacaoBase, Destino) {
    let saida = {lat: loacalizacaoBase.lat, lon: loacalizacaoBase.lon}
    let destino = {lat: Destino.lat, lon: Destino.lon}
    let distancia = haversine(saida, destino)
    distancia = distancia/1000
    distancia =  distancia.toFixed(2)
    return distancia
}

export default calcularDistanciaKm

/*
const a = { latitude: -12.932843, longitude: -38.478589 } // São Caetano -12.932843, -38.478589
const b = { latitude: -12.990318, longitude: -38.472606 } // Universo -12.990318, -38.472606 sauipe -12.377698, -37.884704
*/