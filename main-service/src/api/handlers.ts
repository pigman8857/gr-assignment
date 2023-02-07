import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { Handlers } from "../types";

const healthCheckHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("healthCheckHandler");
    reply.status(200);
    reply.send("Good\n");
    return;
  };
};

const readScanHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("readScanHandler.");
    //const { id } =  request.params as { id : number;}

    try{
    //   console.log("id > ",  id);
      reply.status(200);
      reply.send(`this is read scan`);
    }catch(error){
      console.log('error >',error);
      reply.status(500);
      reply.send(error);
    }
    return;
  };
};

export default function handlers () : Handlers {
    return {
        healthCheckHandler,
        readScanHandler,
    }
};
