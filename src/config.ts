import * as dotenv from 'dotenv' 
import { ConfigInstance } from './types';
dotenv.config();

export default function config () : ConfigInstance{
    return {
        env : process.env.NODE_ENV!,
        port : +process.env.PORT!
    }
}
