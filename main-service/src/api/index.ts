import { FastifyInstance, FastifySchema } from "fastify";
import { SchemaProps, Handlers } from "../types";

const index = (fastifyInstance: FastifyInstance, handlers: Handlers) => {
  return () => {
    // const getAdvertiserParamsProp: SchemaProps = {
    //   type: "object",
    //   properties: {
    //     id: { type: "number" },
    //   },
    // };

    const readScanStatusSchema: FastifySchema = {
      //   params: getAdvertiserParamsProp,
      response: {
        201: {
          type: "object",
          properties: {
            startus: { type: "string" },
          },
        },
      },
    };

    const requestScanSchema: FastifySchema = {
      //   params: getAdvertiserParamsProp,
      response: {
        201: {
          type: "object",
          properties: {
            status: { type: "string" },
          },
        },
      },
    };

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

    const readScanHandler = handlers.readScanHandler(fastifyInstance);
    const requestScanHandler = handlers.requestScanHandler(fastifyInstance);
    const healthCheckHandler = handlers.healthCheckHandler(fastifyInstance);
    const eventsHandler = handlers.eventsHandler(fastifyInstance);

    fastifyInstance.get("/health", healthCheckHandler);

    fastifyInstance.get(
      "/scan",
      {
        schema: readScanStatusSchema,
      },
      readScanHandler
    );

    fastifyInstance.post(
      "/scan",
      {
        schema: requestScanSchema,
      },
      requestScanHandler
    );

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
