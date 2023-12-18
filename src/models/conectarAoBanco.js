const { Pool } = require('pg');
const credenciais = {
  user: process.env.POSTGRES_USER,
  host: '154.56.43.137', 
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PW,
  port: process.env.POSTGRES_PORT,
}
const pool = new Pool(credenciais);
module.exports = pool 