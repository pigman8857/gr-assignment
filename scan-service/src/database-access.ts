import { knex, Knex } from "knex";
import { ConfigInstance } from './types';
 
const createDatabaseAccess = (config : ConfigInstance): Knex => {
    console.log('createDatabaseAccess()');
    const knexInstance: Knex = knex({
      client: "pg",
      connection: {
        host: config.db.host,
        port: config.db.port,
        user: config.db.username,
        password: config.db.password,
        database: config.db.dbName,
      },
      searchPath: [config.db.dbName, 'public'],
    });
    return knexInstance;
 
};


export default createDatabaseAccess;
