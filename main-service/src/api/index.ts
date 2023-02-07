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
            startus: { type: "string" },
          },
        },
      },
    };

    const readScanHandler = handlers.readScanHandler(fastifyInstance);
    const requestScanHandler = handlers.requestScanHandler(fastifyInstance);
    const healthCheckHandler = handlers.healthCheckHandler(fastifyInstance);

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
  };
};

export default index;
