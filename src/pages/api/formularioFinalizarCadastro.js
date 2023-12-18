const pool = require('../../models/conectarAoBanco');
export default async function handler(req, res) {
    const metodo = req.method; 
    const usuario = req.body
    const url = 'https://api.asaas.com/customers';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        access_token: 'end/point/de/pagamento'
      },
      body: JSON.stringify(usuario)
    };

    switch (metodo) {
      case "GET":
       res.status(200).json("Nada por aqui!"); 
        break;
      case "POST": 
      fetch(url, options)
        .then(res => res.json())
        .then(async res => {
          console.log(res)
          let inserirInformacoesNoBanco = await pool.query(`
          UPDATE 
            usuario
          SET 
            id_asaas = '${res.id}', 
            nome = '${res.name}', 
            telefone = '${res.mobilePhone}', 
            endereco = '${res.address}',
            numero = '${res.addressNumber}',
            bairro = '${res.province}',
            cep = '${res.postalCode}',
            cpfcnpj = '${res.cpfCnpj}'
          WHERE 
            email = '${res.email}'
          `)
        })
        .catch(err => console.error('error:' + err));
        res.status(200).json(req.body);
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