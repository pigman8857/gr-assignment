import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { Handlers, ServicesName } from "../types";
import { AxiosError } from "axios";

const healthCheckHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("healthCheckHandler");
    reply.status(200);
    reply.send("Good\n");
    return;
  };
};

const eventsHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("eventsHandler.");
    console.log("body>", request.body);
    const { eventName, data } = request.body as { eventName: string, data: any };
    const { httpClient } = fastify;
    try {
      const mainServiceResult = await httpClient.sendEvent('main', {
        eventName,
        data,
      });
      const scanServiceResult = await httpClient.sendEvent('scan', {
        eventName,
        data,
      });
      console.log("mainServiceResult >", mainServiceResult);
      console.log("scanServiceResult >", scanServiceResult);
      reply.status(201);
      reply.send({ status: "event created" });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("error.code >", error.code);
        console.error("error.config >", {
          url: error.config?.url,
          data: error.config?.data,
          method: error.config?.method,
        });
        console.error("error.response >", {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
        });
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
    eventsHandler,
  };
}
