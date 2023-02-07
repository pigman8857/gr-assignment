import axios from "axios";
import { SendEventResult, HttpClient, ConfigInstance } from "../../types";

const getHttpClient = (configInstance: ConfigInstance): HttpClient => {
  console.log('getHttpClient()');
  console.log('configInstance > ',configInstance);
  return {
    sendEvent: async (eventName: string): Promise<SendEventResult> => {
    
      const result = await axios.post(
        `${configInstance.eventBusServiceHost}:${configInstance.eventBusServicePort}/events`,
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
