import { Joi } from "celebrate";

export default {
  createPointBody: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    city: Joi.string().required(),
    uf: Joi.string().required().max(2),
    items: Joi.string().required(),
  }),
  listFilteredPointsQuery: Joi.object().keys({
    city: Joi.string().required(),
    uf: Joi.string().required(),
    items: Joi.string().required(),
  }),
  listAPointParams: Joi.object().keys({
    id: Joi.number().required(),
  }),
};
