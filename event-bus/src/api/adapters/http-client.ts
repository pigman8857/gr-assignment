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
      console.log('>>>>>sendEvent()<<<<<<<');
      console.log('serviceName >',serviceName);
      console.log('configInstance.services >',configInstance.services);
      console.log('sendEvent at >',configInstance.services[serviceName].host,configInstance.services[serviceName].port);
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
