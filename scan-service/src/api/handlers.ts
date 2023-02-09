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

    try {
      reply.status(200);
      reply.send({ status: "event created" });
    } catch (error) {
      console.log("error >", error);
      reply.status(500);
      reply.send(error);
    }
    return;
  };
};

const eventsHandler= (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("eventsHandler.");
    const { body } = request;
    console.log('body >',body);
    try {
      reply.status(200);
      reply.send({ status: "event received" });
    } catch (error) {
      if(error instanceof Error){
        console.log("error >", error.message);
      }
      reply.status(500);
      reply.send(error);
    }
    return;
  };
};

export default function handlers(): Handlers {
  return {
    healthCheckHandler,
    eventsHandler
  };
}
