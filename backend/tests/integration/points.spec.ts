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

  it("should must add a new point", async () => {
    const response = await request(app).post("/points").send({
      name: "Test name",
      email: "test@example.com",
      whatsapp: 1199999999,
      latitude: -23.5481361,
      longitude: -46.6268068,
      city: "São Paulo",
      uf: "SP",
      items: "1, 2, 3",
    });

    expect(response.body).toHaveProperty("id");
  });

  it("should show the point with id", async () => {
    const response = await request(app).get("/points/1");
    expect(response.body.point.id).toEqual(1);
  });

  it("should display all filtered points", async () => {
    const response = await request(app).get(
      "/points?city=S%C3%A3o%20Paulo&uf=SP&items=1"
    );

    expect(response.body[0].id).toEqual(1);
  });
});
