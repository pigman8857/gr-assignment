import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import handlers from "../handlers";
const { fn, spyOn } = jest;

describe("Test handlers", () => {
  const { eventsHandler, healthCheckHandler } = handlers();

  describe("Test eventsHandler", () => {
    //@ts-ignore
    const instance: FastifyInstance = {
      httpClient: {
        sendEvent: fn(),
      },
    };

    //@ts-ignore
    const req: FastifyRequest = {
      body: {
        eventName: "scanRequested",
      },
    };
    //@ts-ignore
    const res: FastifyReply = {
      status: fn(),
      send: fn(),
    };

    beforeAll(() => {
      spyOn(instance.httpClient, "sendEvent")
        .mockResolvedValueOnce({
          status: 201,
          //@ts-ignore
          data: { status: "OK_MAIN" },
        })
        .mockResolvedValueOnce({
          status: 201,
          //@ts-ignore
          data: { status: "OK_SCAN" },
        });
    });

    it("test if successfully call", async () => {
      await expect(
        eventsHandler(instance)(req, res)
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
