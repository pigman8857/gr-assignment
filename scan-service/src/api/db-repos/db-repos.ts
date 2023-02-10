import { DbRepos } from '../../types';
import { Knex } from 'knex';


const createRepo = (knex: Knex) : DbRepos => {
    console.log('createRepo()');
    return {
        findings: {
            createData : async (data: any) => {
                console.log('createData()');
                const result = await knex('finding').insert({ data },'id');
                console.log('result',result);
            },
            getData: async () => {
                return await knex.from("finding").select(['*']);
            },
        },
        scanEvent: {
            createData : async (data: any) => {
                console.log('createData()');
                const result = await knex('scanEvent').insert({ data },'id');
                console.log('result',result);
            },
            getData: async () => {
                await knex.raw("SELECT 1");
                return await knex.from("scanEvent").select(['*']);
            },
        },
    }
}

export default createRepo;