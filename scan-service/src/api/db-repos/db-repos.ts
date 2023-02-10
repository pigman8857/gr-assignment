import { DbRepos } from '../../types';
import { Knex } from 'knex';


const createRepo = (knex: Knex) : DbRepos => {
    console.log('createRepo()');
    return {
        findings: {
            createData : async (data: any) => {
                return await knex('finding').insert({ data },'id');
            },
            getData: async () => {
                return await knex.from("finding").select(['*']);
            },
        },
        scanEvent: {
            createData : async (data: any) => {       
               return await knex.insert(data,['id']).into('scan_event');
            },
            getData: async () => {
                return await knex.from("scan_event").select(['*']);
            },
        },
    }
}

export default createRepo;