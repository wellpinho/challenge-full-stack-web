const { celebrate, Joi, Segments } = require("celebrate");

const createUserJoi = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    CPF: Joi.string().required(),
  }),
});

const updateUserJoi = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
  }),
});

export { createUserJoi, updateUserJoi };
