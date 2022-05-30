import Joi from "joi";
const idli = Joi.string().required();
const loginli = Joi.string().required();
const passwordli = Joi.string().alphanum().required();
const ageli = Joi.number().integer().min(4).max(130).required();
const isDeletedli = Joi.boolean().required();

const createauthentication = (req, res, next) => {
  const schema = Joi.object({
    id: idli,
    login: loginli,
    password: passwordli,
    age: ageli,
    isDeleted: isDeletedli,
  });
  const value = schema.validate(req.body);
  if (value.error) {
    console.log(value);
    res.status(400).json({
      error: "bad request",
    });
  }
  //res.json(value);
  else {
    next();
  }
};
export { createauthentication };
