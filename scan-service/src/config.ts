import * as dotenv from 'dotenv' 
import { ConfigInstance } from './types';
dotenv.config();

export default function config () : ConfigInstance{
    console.log('Config start');
    console.log('NODE_ENV',process.env.NODE_ENV);
    console.log('PORT',process.env.PORT);
    console.log('EVENT_BUS_HOST_NAME',process.env.EVENT_BUS_HOST_NAME);
    console.log('EVENT_BUS_PORT',process.env.EVENT_BUS_PORT);
    return {
        env : process.env.NODE_ENV!,
        port : +process.env.PORT!,
        eventBusServiceHost: process.env.EVENT_BUS_HOST_NAME!,
        eventBusServicePort: process.env.EVENT_BUS_PORT!,
    }
}
