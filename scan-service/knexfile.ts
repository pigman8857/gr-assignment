import * as path from 'path';

const environment = process.env.NODE_ENV as string;
const envPath = path.resolve(__dirname, `.env`);

console.log(`Load environment from ${envPath}`);
require('dotenv').config({ path: envPath });
console.log('!process.env.DB_USER',process.env.DB_USER);
console.log('!process.env.DB_PASSWORD',process.env.DB_PASSWORD);
if (
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD
) {
  console.log('Some DB_ environment is not defined');
  console.log(`Check DB_USER, DB_PASSWORD in ${envPath}`);
  process.exit(1);
}

module.exports = {
  [environment]: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: 'utf8',
    },
    migrations: {
      tableName: 'knex_migrations',
      extension: 'ts',
    },
  },
};
