const IdentificarLocalizacao = require('../../utils/IdentificarLocalizacao');
export default async function handler(req, res) {
    const metodo = req.method;
    switch (metodo) {
      case "GET":
        const {lat, long} = req.query
        const localizacao = await IdentificarLocalizacao(lat, long)
        res.status(200).json(localizacao); 
        break;
      case "POST": 
        res.status(200).send("Nada por aqui!");
        break;
      case "PUT":
        res.status(200).json("Nada por aqui!")
        break;
      case "DELETE":
        res.status(200).json("Nada por aqui!")
        break;
      default:
        res.status(200).json("Método HTTP desconhecido");
        break;
    }
}