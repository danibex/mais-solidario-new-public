const pool = require('../../models/conectarAoBanco');
export default async function handler(req, res) {
const metodo = req.method; 
switch (metodo) {
  case "GET":
   res.status(200).json(req.body); 
    break;
  case "POST": 
    res.status(200).send(`Dados inseridos com sucesso!`);
    break;
  case "PUT":
    res.status(200).json("Funciona Também!!!")

    break;
  case "DELETE":
    res.status(200).json("Funciona Também!!!")
    break;
  default:
    res.status(200).json("Método HTTP desconhecido");
    break;
}
}