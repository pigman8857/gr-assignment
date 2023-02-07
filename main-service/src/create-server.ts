import { FastifyInstance } from "fastify";
import { ConfigInstance } from "./types";

const createServer = (
  server: FastifyInstance,
  configInstance: ConfigInstance
) => {
  return () => {
    server.listen('4000','0.0.0.0', (err, address) => {
      console.log('Running at port >',configInstance.port);
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  };
};

export default createServer;
