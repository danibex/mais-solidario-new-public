const pool = require('../../models/conectarAoBanco');
export default async function handler(req, res) {
const metodo = req.method; 
const dadosAdicionais = req.body
switch (metodo) {
  case "GET":
   res.status(200).json(req.body); 
    break;
  case "POST": 
    let atualizarDadosAdicionaisDoUsuario = await pool.query(`
    UPDATE 
        usuario
    SET 
        nascimento = '${dadosAdicionais.nascimento}',
        estado = '${dadosAdicionais.estado}',
        cidade = '${dadosAdicionais.cidade}'
    WHERE
        email = '${dadosAdicionais.email}'
    `)
    res.status(200).send(atualizarDadosAdicionaisDoUsuario.rows);
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