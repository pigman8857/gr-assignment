import fastify from "fastify";
import createServer from "./create-server";
import index from "./api";
import config from "./config";
import handlers from "./api/handlers";
import getHttpClient from "./api/adapters/http-client";

console.log("Start server...");
const configInstance = config();
const server = fastify({ logger: true });
server.decorate("httpClient", getHttpClient());
index(server, handlers())();
createServer(server, configInstance)();
