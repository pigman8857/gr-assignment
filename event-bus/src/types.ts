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
    scan: ServicesHostPort;
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
  eventsHandler: HandlerCallback;
}

export interface SendEventResult {
  status: number;
  data: { status: "string" };
}

export type ServicesName = 'main' | 'scan';

export interface HttpClient {
  sendEvent: (
    serviceName: ServicesName,
    data: any
  ) => Promise<SendEventResult | null>;
}
