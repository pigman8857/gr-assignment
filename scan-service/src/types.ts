import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { Knex } from "knex";
declare module "fastify" {
  interface FastifyInstance {
    db: DbRepos;
    httpClient: HttpClient;
  }
}

export interface DbModel {
  getData: (knex: Knex) => Promise<any>;
  createData: (knex: Knex) => Promise<any>;
}
export interface DbRepos {
  findings: DbModel;
}

export interface DBInstanceSettings {
  host: string;
  port: number;
  username: string;
  password: string;
  dbName: string;
}

export interface ConfigInstance {
  env: string;
  port: number;
  eventBusServiceHost: string;
  eventBusServicePort: string;
  db: DBInstanceSettings;
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

export interface HttpClient {
  sendEvent: (eventName: SendableEvents, data: any) => Promise<SendEventResult>;
}

export type SendableEvents = "scanCompleted";

export type ConcernEvents = "scanRequested";
