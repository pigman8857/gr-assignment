import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
declare module "fastify" {
  interface FastifyInstance {
    //db: Knex;
    httpClient: HttpClient;
  }
}

interface ServicesHostPort {
  host: string;
  port: string;
}

export interface ConfigInstance {
  env: string;
  port: number;
  services: {
    main: ServicesHostPort;
    [serviceName: string]: ServicesHostPort;
  };
}

export interface Properties {
  [name: string]: { type: string };
}
export interface SchemaProps {
  type: string;
  properties: Properties;
}

type HandlerCallback = (
  fastify: FastifyInstance
) => (request: FastifyRequest, reply: FastifyReply) => Promise<void>;

export interface Handlers {
  healthCheckHandler: HandlerCallback;
  postEventHandler: HandlerCallback;
}

export interface SendEventResult {
  status: number;
  data: { status: "string" };
}


export enum ServicesName {
  MAIN = 'main',
}

export interface HttpClient {
  sendEvent: (eventName: string, serviceName: ServicesName) => Promise<SendEventResult>;
}
