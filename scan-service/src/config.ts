import * as dotenv from 'dotenv' 
import { ConfigInstance } from './types';
dotenv.config();

export default function config () : ConfigInstance{
    console.log('Config start');
    console.log('NODE_ENV',process.env.NODE_ENV);
    console.log('PORT',process.env.PORT);
    console.log('EVENT_BUS_HOST_NAME',process.env.EVENT_BUS_HOST_NAME);
    console.log('EVENT_BUS_PORT',process.env.EVENT_BUS_PORT);

    console.log('DB');
    console.log('DB_HOST',process.env.DB_HOST);
    console.log('DB_PORT',process.env.DB_PORT);
    console.log('DB_USER',process.env.DB_USER);
    console.log('DB_PASSWORD',process.env.DB_PASSWORD);
    console.log('DB_NAME',process.env.DB_NAME);

    return {
        env : process.env.NODE_ENV!,
        port : +process.env.PORT!,
        eventBusServiceHost: process.env.EVENT_BUS_HOST_NAME!,
        eventBusServicePort: process.env.EVENT_BUS_PORT!,
        db: {
            host: process.env.DB_HOST!,
            port: +process.env.DB_PORT!,
            username: process.env.DB_USER!,
            password: process.env.DB_PASSWORD!,
            dbName: process.env.DB_NAME!
        }
    }
}
