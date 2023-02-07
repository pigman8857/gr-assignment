import fastify from "fastify";
import createServer from "./create-server";
import index from "./api";
import config from "./config";
import handlers from './api/handlers';

console.log("Start server...");
const configInstance = config();
const server = fastify({ logger: true });
index(server,handlers())();
createServer(server, configInstance)();
