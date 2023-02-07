import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import handlers from "../handler";
const { fn } = jest;

describe("Test handlers", () => {
  const { getAdvertiserHandler, healthCheckHandler } = handlers();




  describe("Test getAdvertiserHandler", () => {
    //@ts-ignore
    const instance: FastifyInstance = {

    }

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
      await expect(getAdvertiserHandler(instance)(req, res)).resolves.toBeUndefined();
    });
  });

  describe("Test healthCheckHandler", () => {

    //@ts-ignore
    const instance: FastifyInstance = {

    }

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
      await expect(healthCheckHandler(instance)(req, res)).resolves.toBeUndefined();
    });
  });
});
