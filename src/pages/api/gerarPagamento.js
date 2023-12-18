const pool = require('../../models/conectarAoBanco');
const { addDays, format } = require('date-fns');
export default async function handler(req, res) {
const metodo = req.method;
const {curso_id, email} = req.query;
const hoje = new Date();
const proximoDia = addDays(hoje, 1);
const dataFormatada = format(proximoDia, 'yyyy-MM-dd');
switch (metodo) {
  case "GET":
    let usuario = await pool.query(`
        SELECT 
            id_asaas
        FROM
            usuario
        WHERE 
            email = '${email}'
    `)
    let curso = await pool.query(`
        SELECT 
            cursos.nome, 
            cursos.turno, 
            cursos.cidade, 
            CEIL(cursos.preco * ((100 - desconto_porcentagem) / 100)) AS preco_com_desconto,
            parceiros.nome AS parceiro_nome
            FROM
            cursos
        JOIN
            parceiros ON cursos.id_parceiro = parceiros.id
        WHERE
            cursos.id = ${curso_id}
    `)
    fetch('https://api.asaas.com/payments',{
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            access_token: 'end/point/de/pagamento'
        },
        body: JSON.stringify({
            billingType: 'BOLETO',
            customer: usuario.rows[0].id_asaas,
            value: curso.rows[0].preco_com_desconto,
            dueDate: `${dataFormatada}`,
            description: `${curso.rows[0].nome}/${curso.rows[0].turno}/${curso.rows[0].cidade}/${curso.rows[0].parceiro_nome}`
        })
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            res.status(200).json(json); 
        })
        .catch(err => console.error('error:' + err));
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