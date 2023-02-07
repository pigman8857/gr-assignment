import axios from "axios";
import { SendEventResult, HttpClient } from "../../types";

const getHttpClient = (): HttpClient => {
  return {
    sendEvent: async (): Promise<SendEventResult> => {
      const result = await axios.post(
        "http://event-bus-scan-service:4010/events",
        {
          eventName: "scanRequested1",
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
