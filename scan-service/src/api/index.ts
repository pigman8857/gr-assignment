import { FastifyInstance, FastifySchema } from "fastify";
import { SchemaProps, Handlers } from "../types";

const index = (fastifyInstance: FastifyInstance, handlers: Handlers) => {
  return () => {


    const eventsSchema: FastifySchema = {
      //   params: getAdvertiserParamsProp,
      body: {
        type: "object",
        properties: {
          eventName: { type: "string" },
          data: {
            type: "object",
            additionalProperties: {
              anyOf: [{ type: "string" }, { type: "number" }],
            },
          },
        },
      },
      response: {
        201: {
          type: "object",
          properties: {
            status: { type: "string" },
          },
        },
      },
    };

    const healthCheckHandler = handlers.healthCheckHandler(fastifyInstance);
    const eventsHandler = handlers.eventsHandler(fastifyInstance);

    fastifyInstance.get("/health", healthCheckHandler);

    fastifyInstance.post(
      "/events",
      {
        schema: eventsSchema,
      },
      eventsHandler
    );
  };
};

export default index;
