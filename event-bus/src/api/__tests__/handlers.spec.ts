import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import handlers from "../handlers";
const { fn } = jest;

describe("Test handlers", () => {
  const { postEventHandler, healthCheckHandler } = handlers();

  describe("Test postEventHandler", () => {
    //@ts-ignore
    const instance: FastifyInstance = {
      httpClient: {
        //@ts-ignore
        sendEvent: fn(() =>
          Promise.resolve({ status: 201, data: { status: "OK" } })
        ),
      },
    };

    //@ts-ignore
    const req: FastifyRequest = {
      body: {
        evdntName: "scanRequested",
      },
    };
    //@ts-ignore
    const res: FastifyReply = {
      status: fn(),
      send: fn(),
    };
    it("test if successfully call", async () => {
      await expect(
        postEventHandler(instance)(req, res)
      ).resolves.toBeUndefined();
    });
  });

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
});
