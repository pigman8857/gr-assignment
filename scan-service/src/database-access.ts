import { knex, Knex } from "knex";
import { ConfigInstance } from './types';
 
const databaseAccess = (config : ConfigInstance): Knex | null => {
  try {
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
  } catch (error) {
    if(error instanceof Error)
      console.error("error >", error.message);
    return null;
  }
};


export default databaseAccess;
