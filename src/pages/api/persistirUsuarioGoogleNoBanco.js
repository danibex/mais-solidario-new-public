const pool = require('../../models/conectarAoBanco');
export default async function handler(req, res) {
    const metodo = req.method; 
    const dadosUsuarioGoogle = req.body
    switch (metodo) {
      case "GET":
       res.status(200).json(req.body); 
        break;
      case "POST": 
        let usuario = await pool.query(`
        SELECT 
            *
        FROM 
            usuario
        WHERE email = '${dadosUsuarioGoogle.email}'
        `);
        // Fazer Join com Parceiro
        usuario = usuario.rows
        if(usuario.length == 0) {
            let persistirDadosGoogle = await pool.query(`
            INSERT INTO usuario (uid_google, nome, email, photourl)
            VALUES ('${dadosUsuarioGoogle.uid}', '${dadosUsuarioGoogle.displayName}', '${dadosUsuarioGoogle.email}', '${dadosUsuarioGoogle.photoURL}')
            `);
            res.status(200).json(`Usuário ${dadosUsuarioGoogle.displayName} é novo no sistema e foi cadastrado no banco!`);
        } else {
          res.status(200).json(`O usuário ${dadosUsuarioGoogle.displayName} já existe no banco!`);
        }
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