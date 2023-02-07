import { FastifyInstance, FastifySchema } from "fastify";
import { SchemaProps, Handlers } from "../types";

const index = (fastifyInstance: FastifyInstance, handlers: Handlers) => {
  return () => {

    const postEventSchema: FastifySchema = {
    //   params: getAdvertiserParamsProp,
      body: {
        type: "object",
        properties: {
          eventName: {
            type : 'string',
          }
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

    const postEventHandler = handlers.postEventHandler(fastifyInstance);
    const healthCheckHandler = handlers.healthCheckHandler(fastifyInstance);

    fastifyInstance.get("/health", healthCheckHandler);

    fastifyInstance.post(
      "/events",
      {
        schema: postEventSchema,
      },
      postEventHandler
    );
  };
};

export default index;
