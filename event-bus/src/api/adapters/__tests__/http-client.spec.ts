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
        host: "fakeMainHost",
        port: "4000",
      },
      scan: {
        host: "fakeScanHost",
        port: "4001",
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
    mockedAxios.post.mockResolvedValue(expectedResult);
  });

  afterAll(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    jest.resetModules();
  });

  test("Test sendEvent() main service", async () => {
    expect(httpClient.sendEvent(ServicesName.MAIN,dataToSend)).resolves.toEqual(
      expectedResult
    );
    expect(mockedAxios.post).toBeCalledWith(
      `${configInstance.services.main.host}:${configInstance.services.main.port}/events`,
      dataToSend
    );
  });

  test("Test sendEvent() scan service", async () => {
    expect(httpClient.sendEvent(ServicesName.SCAN,dataToSend)).resolves.toEqual(
      expectedResult
    );
    expect(mockedAxios.post).toBeCalledWith(
      `${configInstance.services.scan.host}:${configInstance.services.scan.port}/events`,
      dataToSend
    );
  });
});
