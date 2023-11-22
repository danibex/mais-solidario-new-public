const { Pool } = require('pg');
const credenciais = {
  user: 'postgres',
  host: 'localhost',
  database: 'Mais Solidario New',
  password: '323019',
  port: 5432,
}
const pool = new Pool(credenciais);
module.exports = pool