import axios from "axios";
import { SendEventResult, HttpClient, ConfigInstance, SendableEvents } from "../../types";

const getHttpClient = (configInstance: ConfigInstance): HttpClient => {
  console.log('getHttpClient()');
  console.log('configInstance > ',configInstance);
  return {
    sendEvent: async (eventName: SendableEvents, data: any): Promise<SendEventResult> => {
    
      const result = await axios.post(
        `${configInstance.eventBusServiceHost}:${configInstance.eventBusServicePort}/events`,
        {
          eventName,
          data
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
