import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { Handlers, ConcernEvents, scanRequestingData, ScanStatues } from "../types";
import crypto from 'crypto';

const healthCheckHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("healthCheckHandler");
    reply.status(200);
    reply.send("Good\n");
    return;
  };
};

const funnyWords = [
  "Mollycoddle_Argle-bargle",
  "Comeuppance_Formication",
  "Slangwhanger_Skedaddle",
  "Cockalorum_Batrachomyomachy",
  "Namby-pamby_Widdershins",
  "Absquatulate_Absquatulate",
  "Snickersnee_Mollycoddle",
  "Goombah_Gongoozle",
  "Yahoo_Bowyang",
  "Gobbledygook_Eructation",
  "Rigmarole_Batrachomyomachy",
  "Pandiculation_Mumpsimus",
  "Panjandrum_Folderol",
  "Dudgeon_Furphy",
  "Rigmarole_Pandiculation",
  "Fuddy-duddy_Flibbertigibbet",
  "Anencephalous_Lickspittle",
  "Flummox_Donnybrook",
  "Kerfuffle_Furbelow",
  "Oocephalus_Sialoquent"
];

let unique_id = '';

const eventsHandler= (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("eventsHandler.");
    console.log('request.body >',request.body);
    reply.status(200);
    reply.send({ status: "event received" });
    console.log('Continue after send status....');


    const { data, eventName } = request.body as { eventName: ConcernEvents , data: any};
    const { httpClient, db: { findings, scanEvent} } = fastify;
    
    try {
        if(eventName === 'scanRequested'){
          const { repository_name } = data as scanRequestingData;

          console.log('Do scanning');
          const randomNumber = Math.floor(Math.random() * funnyWords.length);
          const randomWord = funnyWords[randomNumber];
          console.log('randomNumber >',randomNumber);
          console.log('randomWord > ',randomWord);
          
          unique_id = crypto.randomUUID();

          const insertData = {
            repository_name,
            unique_id,
            scan_status : 'In Progress'
          }

          console.log('insertData >',insertData);
          await scanEvent.createData(insertData);
          //await httpClient.sendEvent('scanCompleted', { data : 'Scanning is completed' });

          setTimeout(async() => {

          },10000);
        }
    } catch (error) {
      console.log('error >',error);
      if(error instanceof Error){
        console.log("error >", error.message);
      }
      reply.status(500);
      reply.send(error);
    }
    return;
  };
};

export default function handlers(): Handlers {
  return {
    healthCheckHandler,
    eventsHandler
  };
}
