import * as dotenv from 'dotenv' 
import { ConfigInstance } from './types';
dotenv.config();

export default function config () : ConfigInstance{
    console.log('Config start');
    console.log('NODE_ENV',process.env.NODE_ENV);
    console.log('PORT',process.env.PORT);
    console.log('MAIN_SERVICE_HOST_NAME',process.env.MAIN_SERVICE_HOST_NAME);
    console.log('MAIN_SERVICE_PORT',process.env.MAIN_SERVICE_PORT);
    console.log('SCAN_SERVICE_HOST_NAME',process.env.SCAN_SERVICE_HOST_NAME);
    console.log('SCAN_SERVICE_PORT',process.env.SCAN_SERVICE_PORT);
    return {
        env : process.env.NODE_ENV!,
        port : +process.env.PORT!,
        services: {
            main: {
                host: process.env.MAIN_SERVICE_HOST_NAME!,
                port : process.env.MAIN_SERVICE_PORT! 
            },
            scan: {
                host: process.env.SCAN_SERVICE_HOST_NAME!,
                port : process.env.SCAN_SERVICE_PORT!  
            }
        }
    }
}
