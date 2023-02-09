import { DbRepos } from '../../types';
import { Knex } from 'knex';

const createRepo = (knex: Knex) : DbRepos => {
    console.log('createRepo()');
    return {
        findings: {
            createData : async () => {
                console.log('createData()');
                console.log(knex);
                await knex.raw("SELECT 1");
                console.log('DB connected');
            },
            getData: async () => {
                await knex.raw("SELECT 1");
                console.log('DB connected');
            },
        }
    }
}

export default createRepo;