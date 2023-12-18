const pool = require('../../models/conectarAoBanco');
export default async function handler(req, res) {
    const metodo = req.method; 
    const {email} = req.query
    switch (metodo) {
      case "GET":
      let usuario = await pool.query(`
        SELECT
            *
        FROM
            usuario
        WHERE
            email = '${email}'
      `) 
      usuario = usuario.rows
      res.status(200).json(usuario); 
        break;
      case "POST": 
        res.status(200).send(req.body);
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