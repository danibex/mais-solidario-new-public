const pool = require('../../models/conectarAoBanco');
const gerarNumerosAleatoriosSemRepeticao = require('../../utils/GerarNumerosAleatorios');
export default async function handler(req, res) {
    const metodo = req.method;
    switch (metodo) {
      case "GET":
        const id = gerarNumerosAleatoriosSemRepeticao(8, 1, 44); 
        let cursos = await pool.query(`
        SELECT 
        DISTINCT
        nome, caminho_imagem
        FROM 
        cursos
        WHERE id = ${id[0]} OR id = ${id[1]} OR id = ${id[2]} OR id = ${id[3]} OR id = ${id[4]} OR id = ${id[5]} OR id = ${id[6]} OR id = ${id[7]}  
        `);
        // Fazer Join com Parceiro
        cursos = cursos.rows
        res.status(200).json(cursos); 
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