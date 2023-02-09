import fastify from "fastify";
import createServer from "./create-server";
import index from "./api";
import config from "./config";
import handlers from "./api/handlers";
import getHttpClient from "./api/adapters/http-client";
import databaseAccess from './database-access';
console.log("Start server...");
const configInstance = config();
const server = fastify({ logger: true });

server.decorate("httpClient", getHttpClient(configInstance));
server.decorate('db',databaseAccess(configInstance));

index(server, handlers())();
createServer(server, configInstance)();
