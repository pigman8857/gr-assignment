import { DbRepos } from '../../types';
import { Knex } from 'knex';


const createRepo = (knex: Knex) : DbRepos => {
    console.log('createRepo()');
    return {
        findings: {
            createData : async (data: any) => {
                console.log('createData()');
                const result = await knex('finding').insert({ data }).select(['id']);
                console.log('result',result);
            },
            getData: async () => {
                await knex.raw("SELECT 1");
                console.log('DB connected');
            },
        }
    }
}

export default createRepo;