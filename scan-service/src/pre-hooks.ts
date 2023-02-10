import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
let isLock = false;
const addPreHooks = (fastify: FastifyInstance) => {
    fastify.addHook('preHandler', (req: FastifyRequest, reply: FastifyReply, done) => {
        console.log('>>>>>preHandler()');
        console.log('isLock >',isLock);

        if(!isLock){
            isLock = true;
            setTimeout(() => {
                console.log('scan service is now available');
                isLock = false;
            },10000);
        }
        else{
            reply.status(500)
            reply.send({ status : 'scan service is currently working'});
        }


        done();
    })
}

export default addPreHooks;