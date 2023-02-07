import { FastifyInstance, FastifySchema } from "fastify";
import { SchemaProps, Handlers } from "../types";

const index = (fastifyInstance: FastifyInstance, handlers: Handlers) => {
  return () => {

    const getAdvertiserParamsProp: SchemaProps = {
      type: "object",
      properties: {
        id: { type: "number" },
      },
    };

    const getAdvertiserSchema: FastifySchema = {
    //   params: getAdvertiserParamsProp,
    };

    const readScanHandler = handlers.readScanHandler(fastifyInstance);
    const healthCheckHandler = handlers.healthCheckHandler(fastifyInstance);

    fastifyInstance.get("/health", healthCheckHandler);

    fastifyInstance.get(
      "/scan",
      {
        schema: getAdvertiserSchema,
      },
      readScanHandler
    );

    // fastifyInstance.post(
    //     "/scan",
    //     {
    //       schema: getAdvertiserSchema,
    //     },
    //     getAdvertiserHandler
    // );
  };
};

export default index;