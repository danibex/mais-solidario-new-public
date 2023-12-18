const pool = require('../../models/conectarAoBanco');
const gerarNumerosAleatoriosSemRepeticao = require('../../utils/GerarNumerosAleatorios');
export default async function handler(req, res) {
    const metodo = req.method;
    switch (metodo) {
      case "GET":
        const id = gerarNumerosAleatoriosSemRepeticao(3, 1, 44); 
        let cursos = await pool.query(`
        SELECT 
        cursos.id, cursos.preco, cursos.estado, cursos.cidade, cursos.turno, cursos.modalidade, cursos.nome AS nome_curso, cursos.mais_cursado, 
        trunc(cursos.preco * ((100 - desconto_porcentagem) / 100)) AS preco_com_desconto,
        parceiros.id AS id_parceiro, parceiros.caminho_imagem AS caminho_imagem_parceiro,
        parceiros.nome AS nome_parceiro, parceiros.recomendacao_porcentagem, parceiros.preco_curso_mais_barato
        FROM 
        cursos 
        JOIN
        parceiros ON cursos.id_parceiro = parceiros.id
        WHERE cursos.id = ${id[0]} OR cursos.id = ${id[1]} OR cursos.id = ${id[2]}
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