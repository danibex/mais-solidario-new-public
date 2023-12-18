const pool = require('../../models/conectarAoBanco');
export default async function handler(req, res) {
const metodo = req.method; 
const dadosHook = req.body
const dadosHookPagamento = dadosHook.payment
switch (metodo) {
  case "GET":
   res.status(200).json(req.body); 
    break;
/*{
   "event":"PAYMENT_RECEIVED",
   "payment":{
      "id":"pay_080225913252",
      "customer":"cus_G7Dvo4iphUNk",
      "value":100,
      "description":"Pedido 056984",
      "externalReference":"056984",
      "billingType":"CREDIT_CARD",
      "status":"RECEIVED",
      "customer":"cus_G7Dvo4iphUNk"
   }
} */
  case "POST": 
    let atualizarIdUsuario = await pool.query(`
    INSERT INTO usuario (id)
    VALUES ('${dadosHookPagamento.id}')
    `)
    let atualizarPagamento = await pool.query(`
    INSERT INTO pagamento_status (id, event, value, description, billingtype, status, id_usuario, id_cobranca)
            VALUES (
            '${dadosHookPagamento.id}', 
            '${dadosHook.event}', 
            ${dadosHookPagamento.value}, 
            '${dadosHookPagamento.description}', 
            '${dadosHookPagamento.billingType}', 
            '${dadosHookPagamento.status}',
            '${dadosHookPagamento.customer}',
            '${dadosHookPagamento.id}'
              )
    `) 
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