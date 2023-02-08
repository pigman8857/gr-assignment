import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
import getHttpClient from "../http-client";
import { ConfigInstance, ServicesName } from "../../../types";

describe("httpClient test", () => {
  //@ts-ignore
  const configInstance: ConfigInstance = {
    services: {
      main: {
        host: "fakeHost",
        port: "4000",
      },
    },
  };

  const httpClient = getHttpClient(configInstance);
  const expectedResult = {
    status: 200,
    data: {},
  };

  const dataToSend = {
    eventName: "fakeEventName",
    data: {
      someKey: "someData",
    },
  };

  beforeAll(() => {
    mockedAxios.post.mockResolvedValueOnce(expectedResult);
  });

  afterAll(() => {});

  test("Test sendEvent()", async () => {
    expect(httpClient.sendEvent(ServicesName.MAIN,dataToSend)).resolves.toEqual(
      expectedResult
    );
    expect(mockedAxios.post).toBeCalledWith(
      `${configInstance.services.main.host}:${configInstance.services.main.port}/events`,
      dataToSend
    );
  });
});
