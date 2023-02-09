import { Knex } from "knex";
import { resolve } from "path";
const dbScriptsPath = resolve(__dirname, '../db_scripts');
import { readFileSync } from "fs";

export async function seed(knex: Knex): Promise<void> {
    await knex.raw(readFileSync(`${dbScriptsPath}/finding/finding.sql`, 'utf-8'));
};
