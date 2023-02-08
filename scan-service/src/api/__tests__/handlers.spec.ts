import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import handlers from "../handlers";
const { fn } = jest;

describe("Test handlers", () => {
  const {
    healthCheckHandler,
    eventsHandler,
  } = handlers();

  describe("Test healthCheckHandler", () => {
    //@ts-ignore
    const instance: FastifyInstance = {};

    //@ts-ignore
    const req: FastifyRequest = {
      params: {
        id: 1,
      },
    };
    //@ts-ignore
    const res: FastifyReply = {
      status: fn(),
      send: fn(),
    };
    it("test if successfully call", async () => {
      await expect(
        healthCheckHandler(instance)(req, res)
      ).resolves.toBeUndefined();
    });
  });

  describe("Test eventsHandler", () => {
    //@ts-ignore
    const instance: FastifyInstance = {};
    //@ts-ignore
    const req: FastifyRequest = {
      body: {
        eventName: 'fakeEvent',
        data: {
          id: 1,
          someKey: 'someData'
        }
      }
    };
    //@ts-ignore
    const res: FastifyReply = {
      status: fn(),
      send: fn(),
    };
    it("test if successfully call", async () => {
      await expect(eventsHandler(instance)(req, res)).resolves.toBeUndefined();
    });
  });
});
