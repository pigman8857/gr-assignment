import * as dotenv from 'dotenv' 
import { ConfigInstance } from './types';
dotenv.config();

export default function config () : ConfigInstance{
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
