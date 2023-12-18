const pool = require('../../models/conectarAoBanco');
export default async function handler(req, res) {
    const metodo = req.method;
    const {id, nome} = req.query
    switch (metodo) {
      case "GET":
        let cursos = await pool.query(`
        SELECT 
            cursos.id, cursos.preco, cursos.estado, cursos.cidade, cursos.turno, cursos.modalidade, cursos.nome AS nome_curso, cursos.mais_cursado, 
            trunc(cursos.preco * ((100 - desconto_porcentagem) / 100)) AS preco_com_desconto, cursos.nivel, cursos.url_localizacao_mapa, 
            cursos.desconto_porcentagem, cursos.alta_empregabilidade, cursos.sobre AS sobre_curso, cursos.endereco,    
            parceiros.id AS id_parceiro, parceiros.caminho_imagem AS caminho_imagem_parceiro,
            parceiros.nome AS nome_parceiro, parceiros.recomendacao_porcentagem, parceiros.preco_curso_mais_barato,
            parceiros.sobre_faculdade, parceiros.sobre_campus, parceiros.sobre_ead, parceiros.sobre_presencial
        FROM 
            cursos 
        JOIN
            parceiros ON cursos.id_parceiro = parceiros.id
        WHERE 
            cursos.id = ${id}
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