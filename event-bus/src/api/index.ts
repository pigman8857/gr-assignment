import { FastifyInstance, FastifySchema } from "fastify";
import { SchemaProps, Handlers } from "../types";

const index = (fastifyInstance: FastifyInstance, handlers: Handlers) => {
  return () => {

    const eventSchema: FastifySchema = {
    //   params: getAdvertiserParamsProp,
      body: {
        type: "object",
        properties: {
          eventName: {
            type : 'string',
          },
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
            status: {
              type : 'string',         
            }
          }
        }
      }
    };

    const eventsHandler = handlers.eventsHandler(fastifyInstance);
    const healthCheckHandler = handlers.healthCheckHandler(fastifyInstance);

    fastifyInstance.get("/health", healthCheckHandler);

    fastifyInstance.post(
      "/events",
      {
        schema: eventSchema,
      },
      eventsHandler
    );
  };
};

export default index;
