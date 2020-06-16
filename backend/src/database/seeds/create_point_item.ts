import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("point_item").insert([
    { point_id: 1, item_id: 1 },
    { point_id: 1, item_id: 2 },
  ]);
}
