import * as dotenv from 'dotenv' 
import { ConfigInstance } from './types';
dotenv.config();

export default function config () : ConfigInstance{
    return {
        env : process.env.NODE_ENV!,
        port : +process.env.PORT!,
        mainServiceHost : process.env.MAIN_SERVICE_HOST_NAME!,
        mainServicePort : process.env.MAIN_SERVICE_PORT!   
    }
}
