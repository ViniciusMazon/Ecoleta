import { Request, Response } from "express";
import knex from "../database/connection";

class PointsController {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = req.body;

    const trx = await knex.transaction();

    const point = {
      image: process.env.NODE_ENV === "test" ? "test.png" : req.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    const insertedIds = await trx("points").insert(point);

    const point_id = insertedIds[0];

    const pointItem = items
      .split(",")
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => ({
        item_id,
        point_id,
      }));

    await trx("point_item").insert(pointItem);

    await trx.commit();

    return res.json({
      id: point_id,
      ...point,
    });
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const point = await knex("points").where("id", id).first();

    if (!point) {
      return res.status(400).json({ message: "Point not found." });
    }

    const items = await knex("items")
      .join("point_item", "items.id", "=", "point_item.item_id")
      .where("point_item.point_id", id)
      .select("items.title");

    const serializedPoint = {
      ...point,
      image_url: `http://192.168.1.64:3333/uploads/${point.image}`,
    };

    return res.json({ point: serializedPoint, items });
  }

  async index(req: Request, res: Response) {
    const { city, uf, items } = req.query;

    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_item", "points.id", "=", "point_item.point_id")
      .whereIn("point_item.item_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");

    const serializedPoints = points.map((point) => ({
      ...point,
      image_url: `http://192.168.1.64:3333/uploads/${point.image}`,
    }));

    return res.json(serializedPoints);
  }
}

export default new PointsController();
