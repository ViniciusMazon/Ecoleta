import { Router } from "express";
import multer from "multer";
import { celebrate } from "celebrate";
import multerConfig from "./config/multer";
import validationSchema from "./validations/schema";

import itemsController from "./controllers/ItemsController";
import pointsController from "./controllers/PointsController";

const routes = Router();
const upload = multer(multerConfig);

routes.get("/items", itemsController.index);

routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    { body: validationSchema.createPointBody },
    {
      abortEarly: false,
    }
  ),
  pointsController.create
);

routes.get(
  "/points",
  celebrate(
    { query: validationSchema.listFilteredPointsQuery },
    {
      abortEarly: false,
    }
  ),
  pointsController.index
);

routes.get(
  "/points/:id",
  celebrate(
    {
      params: validationSchema.listAPointParams,
    },
    {
      abortEarly: false,
    }
  ),
  pointsController.show
);

export default routes;
