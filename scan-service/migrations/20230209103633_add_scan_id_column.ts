import { Knex } from "knex";
import { resolve } from "path";
const dbScriptsPath = resolve(__dirname, '../db_scripts');
import { readFileSync } from "fs";

export async function up(knex: Knex): Promise<void> {
    console.log('up');
    await knex.raw('ALTER TABLE finding ADD COLUMN scan_id INTEGER');
    await knex.raw(readFileSync(`${dbScriptsPath}/scanEvent/scan-event.sql`, 'utf-8'));


}


export async function down(knex: Knex): Promise<void> {
    console.log('down');
    await knex.raw('ALTER TABLE finding DROP COLUMN scan_id;');
    await knex.raw('DROP TABLE scanEvent;');
    await knex.raw('DROP TYPE ScanStatus;');
}

