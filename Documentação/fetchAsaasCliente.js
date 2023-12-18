const fetch = require('node-fetch');

const url = 'https://sandbox.asaas.com/api/v3/customers';
const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify({
    name: 'Daniel Ivan Medeiros Santana',
    cpfCnpj: '06353867557',
    email: 'danielivam96@gmail.com',
    mobilePhone: '71992447413',
    address: 'Estrada de Campinas',
    addressNumber: '395',
    complement: 'Em frente ao material de construção Escala',
    province: 'São Caetano',
    postalCode: '40391160'
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
/* Resposta */
  {
    "object": "customer",
    "id": "cus_13bFHumeyglN",
    "dateCreated": "08/03/2017",
    "name": "Marcelo Almeida",
    "email": "marcelo.almeida@gmail.com",
    "phone": "4738010919",
    "mobilePhone": "4799376637",
    "address": "Av. Paulista",
    "addressNumber": "150",
    "complement": "Sala 201",
    "province": "Centro",
    "postalCode": "01310000",
    "cpfCnpj": "24971563792",
    "personType": "FISICA",
    "deleted": false,
    "additionalEmails": "marcelo.almeida2@gmail.com,marcelo.almeida3@gmail.com",
    "externalReference": "12987382",
    "notificationDisabled": false,
    "city": 15873,
    "state": "SP",
    "country": "Brasil",
    "observations": "ótimo pagador, nenhum problema até o momento"
  }