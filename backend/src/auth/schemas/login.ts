import Joi from 'joi';

const loginSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./]).*$/).min(8).max(30).required(),

});

export default loginSchema;