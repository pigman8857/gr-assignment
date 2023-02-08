import axios from "axios";
import {
  SendEventResult,
  HttpClient,
  ConfigInstance,
  ServicesName,
} from "../../types";

const getHttpClient = (configInstance: ConfigInstance): HttpClient => {
  return {
    sendEvent: async (
      serviceName: ServicesName,
      data: any
    ): Promise<SendEventResult | null> => {
      const result = await axios.post(
        `${configInstance.services[serviceName].host}:${configInstance.services[serviceName].port}/events`,
        data
      );
      return {
        status: result.status,
        data: result.data,
      };
    },
  };
};

export default getHttpClient;
