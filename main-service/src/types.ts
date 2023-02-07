import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
//import { knex, Knex } from "knex";
declare module "fastify" {
  interface FastifyInstance {
    //db: Knex;
    httpClient: HttpClient;
  }
}

export interface ConfigInstance {
  env: string;
  port: number;
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
  readScanHandler: HandlerCallback;
  requestScanHandler: HandlerCallback;
}

export interface SendEventResult {
  status: number;
  data: { status: "string" };
}

export interface HttpClient {
  sendEvent: () => Promise<SendEventResult>;
}
