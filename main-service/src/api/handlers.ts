import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { Handlers, ConcernEvents} from "../types";
import { AxiosError } from 'axios'

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
    console.log(">>>>>readScanHandler()");

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

const requestScanHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log(">>>>>>>>>>>requestScanHandler()");

    const { httpClient } = fastify;
    try {
      const result = await httpClient.sendEvent('scanRequested', { key: "someDataFromMainService"})
      console.log("httpClient.sendEvent() result", result);
      reply.status(201);
      reply.send({ status: "scan created" });
    } catch (error) {
      if(error instanceof AxiosError){
        console.error("error.code >", error.code);
        console.error("error.config >", { url : error.config?.url, data: error.config?.data, method: error.config?.method});
        console.error("error.response >", { status: error.response?.status, statusText: error.response?.statusText, data: error.response?.data });
   
      }
      reply.status(500);
      reply.send(error);
    }
    return;
  };
};

const eventsHandler= (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log(">>>>>>>>>eventsHandler()");
    console.log('request.body >',request.body);
    const { data, eventName } = request.body as { eventName: ConcernEvents , data: any};
    
    try {

      if(eventName === 'scanCompleted'){
        console.log('scan is completed with data',data);
      }

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
    readScanHandler,
    requestScanHandler,
    eventsHandler
  };
}
