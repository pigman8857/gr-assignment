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

const getAdvertiserHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("getAdvertiserHandler.");
    const { id } =  request.params as { id : number;}

    try{
      console.log("id > ",  id);
      reply.status(200);
      reply.send(`this is advertiser ${ id}`);
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
        getAdvertiserHandler,
    }
};
