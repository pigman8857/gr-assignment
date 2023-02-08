import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { Handlers, ServicesName} from "../types";

const healthCheckHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("healthCheckHandler");
    reply.status(200);
    reply.send("Good\n");
    return;
  };
};

const postEventHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("postEventHandler.");
    console.log("body>", request.body);
    const { data, eventName } = request.body as { eventName: string, data: any };
    const { httpClient } = fastify;
    try {
      const mainServiceResult = await httpClient.sendEvent(ServicesName.MAIN,{ data , eventName});
      const scanServiceResult = await httpClient.sendEvent(ServicesName.SCAN,{ data , eventName});
      console.log('mainServiceResult >',mainServiceResult);
      console.log('scanServiceResult >',scanServiceResult);
      reply.status(201);
      reply.send({ status: "event created" });
    } catch (error) {
      console.log("error >", error);
      reply.status(500);
      reply.send(error);
    }
    return;
  };
};

export default function handlers(): Handlers {
  return {
    healthCheckHandler,
    postEventHandler,
  };
}
