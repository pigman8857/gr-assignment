import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import handlers from "../handlers";
const { fn } = jest;

describe("Test handlers", () => {
  const {
    readScanHandler,
    healthCheckHandler,
    requestScanHandler,
    eventsHandler,
  } = handlers();

  describe("Test readScanHandler", () => {
    //@ts-ignore
    const instance: FastifyInstance = {};

    //@ts-ignore
    const req: FastifyRequest = {
      //   params: {
      //     id: 1,
      //   },
    };
    //@ts-ignore
    const res: FastifyReply = {
      status: fn(),
      send: fn(),
    };
    it("test if successfully call", async () => {
      await expect(
        readScanHandler(instance)(req, res)
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

  describe("Test requestScanHandler", () => {
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
    const req: FastifyRequest = {};
    //@ts-ignore
    const res: FastifyReply = {
      status: fn(),
      send: fn(),
    };
    it("test if successfully call", async () => {
      await expect(
        requestScanHandler(instance)(req, res)
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
