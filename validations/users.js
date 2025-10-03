import Joi from "joi";

export const createUser =Joi.object({
    id: Joi.number().integer(),
    name: Joi.string().min(2).max(255).required(),
    age: Joi.number().min(1).max(120).required()
});


export const getUser = Joi.object({
    id: Joi.number().integer().required(),
})
