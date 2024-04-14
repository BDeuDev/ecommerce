import { Email } from '@mui/icons-material';
import Joi from 'joi';
const username = Joi.string().alphanum().min(3).max(30).required().messages({
  'string.base': 'El nombre de usuario debe ser un texto',
  'string.empty': 'El nombre de usuario no puede estar vacío',
  'string.min': 'El nombre de usuario debe tener al menos {#limit} caracteres',
  'string.max': 'El nombre de usuario no puede tener más de {#limit} caracteres',
  'any.required': 'El nombre de usuario es requerido',
})
const name =Joi.string().pattern(new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,30}$')).required().messages({
  'string.empty': 'El nombre no puede estar vacío',
  'string.pattern.base': 'El campo name debe contener solo letras y tener entre 3 y 30 caracteres.',
  'any.required': 'El campo name es obligatorio.',
})
const lastname =  Joi.string().pattern(new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,30}$')).required().messages({
  'string.empty': 'El apellido no puede estar vacío',
  'string.pattern.base': 'El campo lastname debe contener solo letras y tener entre 3 y 30 caracteres.',
  'any.required': 'El campo lastname es obligatorio.',
})
const email = Joi.string().pattern(new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')).required().messages({
  'string.email': 'El formato del correo electrónico no es válido',
  'any.required': 'El correo electrónico es requerido',
  'string.empty': 'El correo electrónico no puede estar vacío',
})
const password =  Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().messages({
  'string.empty': 'La contraseña no puede estar vacía',
  'string.pattern.base': 'El campo password debe contener solo letras y números y tener entre 3 y 30 caracteres.',
  'any.required': 'El campo password es obligatorio.',
})

const registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required().messages({
        'string.base': 'El nombre de usuario debe ser un texto',
        'string.empty': 'El nombre de usuario no puede estar vacío',
        'string.min': 'El nombre de usuario debe tener al menos {#limit} caracteres',
        'string.max': 'El nombre de usuario no puede tener más de {#limit} caracteres',
        'any.required': 'El nombre de usuario es requerido',
    }),
    name: Joi.string().pattern(new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,30}$')).required().messages({
        'string.empty': 'El nombre no puede estar vacío',
        'string.pattern.base': 'El campo name debe contener solo letras y tener entre 3 y 30 caracteres.',
        'any.required': 'El campo name es obligatorio.',
      }),
    lastname: Joi.string().pattern(new RegExp('^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,30}$')).required().messages({
        'string.empty': 'El apellido no puede estar vacío',
        'string.pattern.base': 'El campo lastname debe contener solo letras y tener entre 3 y 30 caracteres.',
        'any.required': 'El campo lastname es obligatorio.',
      }),
        email: Joi.string().pattern(new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')).required().messages({
            'string.email': 'El formato del correo electrónico no es válido',
            'any.required': 'El correo electrónico es requerido',
            'string.empty': 'El correo electrónico no puede estar vacío',
        }), 
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().messages({
        'string.empty': 'La contraseña no puede estar vacía',
        'string.pattern.base': 'El campo password debe contener solo letras y números y tener entre 3 y 30 caracteres.',
        'any.required': 'El campo password es obligatorio.',
      }),

});

export default registerSchema;