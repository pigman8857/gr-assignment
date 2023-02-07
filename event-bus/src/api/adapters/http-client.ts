import axios from "axios";
import { SendEventResult, HttpClient, ConfigInstance } from "../../types";

const getHttpClient = (configInstance: ConfigInstance): HttpClient => {
  return {
    sendEvent: async (eventName: string, serviceName: string): Promise<SendEventResult> => {
      const result = await axios.post(
        `${configInstance.services[serviceName].host}:${configInstance.services[serviceName].port}/events`,
        {
          eventName,
        }
      );
      return {
        status: result.status,
        data: result.data,
      };
    },
  };
};

export default getHttpClient;
