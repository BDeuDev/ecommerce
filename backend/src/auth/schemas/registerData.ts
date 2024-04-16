import Joi from 'joi';

const RegisterData = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().pattern(new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]+$')).min(3).max(30).required(),
    lastname: Joi.string().pattern(new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]+$')).min(3).max(30).required(),
    email: Joi.string().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]+$')).min(8).max(30).required(),

});

export default RegisterData;