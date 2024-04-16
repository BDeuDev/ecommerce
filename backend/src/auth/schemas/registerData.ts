import Joi from 'joi';

const UserSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().pattern(new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,30}$')).required(),
    lastname: Joi.string().pattern(new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,30}$')).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

});

export default UserSchema;