function IdentificarLocalizacao(lat, long) {
    let localizacao = { cidade: "", estado: "" };
    
    return fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`)
        .then((resp) => resp.json())
        .then((resp) => {
            localizacao.cidade = resp.address.city;
            localizacao.estado = resp.address.state;
            return localizacao; // Retorna a localização atualizada
        });
}

module.exports = IdentificarLocalizacao

/*
const lat = "-12.9946929";
const long = "-38.4737085";

IdentificarLocalizacao(lat, long)
    .then((localizacao) => console.log(localizacao));
*/