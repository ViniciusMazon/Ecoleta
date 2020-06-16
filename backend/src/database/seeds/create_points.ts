import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("points").insert([
    {
      name: "Test name",
      email: "test@example.com",
      whatsapp: "11 99999999",
      latitude: -23.5481361,
      longitude: -46.6268068,
      city: "São Paulo",
      uf: "SP",
      image: "test_seed.png",
    },
  ]);
}
