import { Knex } from "knex";
// import { resolve } from "path";
// const dbScriptsPath = resolve(__dirname, '../db_scripts');
// import { readFileSync } from "fs";

export async function up(knex: Knex): Promise<void> {
    console.log('up');
    await knex.raw('ALTER TABLE finding ADD COLUMN scan_id UUID');
}


export async function down(knex: Knex): Promise<void> {
    console.log('down');
    await knex.raw('ALTER TABLE finding DROP COLUMN scan_id;');
}

