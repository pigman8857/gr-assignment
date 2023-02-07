import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";

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
  postEventHandler: HandlerCallback;
}
