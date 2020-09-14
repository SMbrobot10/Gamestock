const { Pool, Client } = require('pg');

module.exports.pool = new Pool({
  user: 'insertNameOfUser',
  password: 'password',
  host: 'localhost',
  database: 'nameOfDB',
  port: '5432',
});

// mirror the pool. 
module.exports.client = new Client({ 
  user: '',
  password: '',
  host: '',
  database: '',
  // 5432 is the default port for Postgres
  port: '5432',
});