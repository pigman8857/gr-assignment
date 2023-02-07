import axios from "axios";
import { SendEventResult, HttpClient, ConfigInstance } from "../../types";

const getHttpClient = (configInstance: ConfigInstance): HttpClient => {
  return {
    sendEvent: async (eventName: string): Promise<SendEventResult> => {
      const result = await axios.post(
        `${configInstance.eventBusServiceHost}:${configInstance.port}/events`,
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
