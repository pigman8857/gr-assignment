import { Knex } from "knex";
import { resolve } from "path";
const dbScriptsPath = resolve(__dirname, '../db_scripts');
import { readFileSync } from "fs";

export async function up(knex: Knex): Promise<void> {
    console.log('up');
    await knex.raw(readFileSync(`${dbScriptsPath}/finding/finding.sql`, 'utf-8'));
}


export async function down(knex: Knex): Promise<void> {
    console.log('down');
    await knex.raw('DROP TABLE finding;', 'utf-8');
}

