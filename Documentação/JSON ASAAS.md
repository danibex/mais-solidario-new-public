# Google



# Webhook cobrança
~~~ json
{
   "event":"PAYMENT_RECEIVED",
   "payment":{
      "id":"pay_080225913252",
      "customer":"cus_G7Dvo4iphUNk",
      "value":100,
      "description":"Pedido 056984",
      "externalReference":"056984",
      "billingType":"CREDIT_CARD",
      "status":"RECEIVED",
   }
}
~~~

# Criando usuário
~~~ javascript
const fetch = require('node-fetch');

const url = 'https://sandbox.asaas.com/api/v3/customers';
const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({name: 'Daniel Ivan'})
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
~~~

~~~ json
// Requisição
{
    "name": "Daniel Ivan Medeiros Santana",
    "cpfCnpj": 06353867557,
    "email": "danielivam96@gmail.com",
    "mobilePhone": 71992447413,
    "address": "Estrada de Campinas",
    "addressNumber": 395,
    "postalCode": 40391160,
    "observations": "Sistema da Informação | Universo"
  }
~~~
~~~ json
// Resposta

~~~


# Cobrança
~~~ javascript
const fetch = require('node-fetch');

const url = 'https://sandbox.asaas.com/api/v3/payments';
const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({
    billingType: 'BOLETO',
    customer: 'cus_G7Dvo4iphUNk',
    value: 100,
    dueDate: '2023-11-13',
    description: 'Análise de Sistemas | Universo'
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
~~~

~~~ json
{
    "billingType": "BOLETO",
    "customer": "cus_G7Dvo4iphUNk",
    "value": 100,
    "dueDate": 2023-11-13,
    "description": "Análise de Sistemas | Universo"
}
~~~