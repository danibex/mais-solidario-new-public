const pool = require('../../models/conectarAoBanco');
export default async function handler(req, res) {
    const metodo = req.method;
    const {tipo, nome, faculdade, cidade, pretencao, presencial, hibrido, online, nivel, turno} = req.body

    switch (metodo) {
      case "GET":
        /*let cursos = await pool.query(`
        SELECT 
        cursos.id, cursos.preco, cursos.estado, cursos.cidade, cursos.turno, cursos.modalidade, cursos.nome AS nome_curso, cursos.mais_cursado, 
        cursos.desconto_porcentagem,
        trunc(cursos.preco * ((100 - desconto_porcentagem) / 100)) AS preco_com_desconto,
        cursos.endereco, cursos.inicio, cursos.semestres, cursos.nivel, cursos.economia_total,
        parceiros.id AS id_parceiro, parceiros.caminho_imagem AS caminho_imagem_parceiro, parceiros.nome AS nome_parceiro
        FROM 
        cursos 
        JOIN
        parceiros ON cursos.id_parceiro = parceiros.id
        ${nome ? `WHERE cursos.nome ILIKE '%${nome}%'` : ``}
        ${tipo ? `WHERE cursos.nivel ILIKE '%${tipo}%'` : ``}
        ${faculdade ? `WHERE parceiro.nome ILIKE '%${faculdade}%'` : ``}
        ${cidade ? `WHERE cursos.cidade ILIKE '%${cidade}%'` : ``}
        ${pretencao ? `WHERE cursos.preco_com_desconto < ${cidade}` : ``}
        ${cidade ? `WHERE cursos.cidade ILIKE '%${cidade}%'` : ``}
      
        `);
        //LIMIT 16 OFFSET ${(pagina - 1)*16} 
        cursos = cursos.rows*/
        res.status(200).json("Nada por aqui!"); 
        break;
      case "POST": 
        let cursos = await pool.query(`
        SELECT 
        cursos.id, cursos.preco, cursos.estado, cursos.cidade, cursos.turno, cursos.modalidade, cursos.nome AS nome_curso, cursos.mais_cursado, 
        cursos.desconto_porcentagem, cursos.semestres,
        trunc(cursos.preco * ((100 - desconto_porcentagem) / 100)) AS preco_com_desconto,
        cursos.endereco, cursos.inicio, cursos.semestres, cursos.nivel, cursos.economia_total,
        parceiros.id AS id_parceiro, parceiros.caminho_imagem AS caminho_imagem_parceiro, parceiros.nome AS nome_parceiro
        FROM 
        cursos 
        JOIN
        parceiros ON cursos.id_parceiro = parceiros.id
        `)
        res.status(200).json(cursos.rows);
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