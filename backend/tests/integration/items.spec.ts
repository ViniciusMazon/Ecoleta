import request from "supertest";
import app from "../../src/app";
import connection from "../../src/database/connection";

describe("Points", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
    await connection.seed.run();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should list the items", async () => {
    const response = await request(app).get("/items");
    expect(response.body[0].id).toEqual(1);
  });
});
