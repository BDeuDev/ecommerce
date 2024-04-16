import Joi from 'joi';

// Individual validation schemas with translated and shortened messages
export const username = Joi.string().alphanum().min(3).max(30).required().messages({
  'string.base': 'Username must be a text',
  'string.empty': 'Username cannot be empty',
  'string.alphanum':'Username must contain only alphanumeric chars',
  'string.min': 'Username must be at least {#limit} characters long',
  'string.max': 'Username cannot exceed {#limit} characters',
  'any.required': 'Username is required',
});

export const name = Joi.string().pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/).min(3).max(30).required().messages({
  'string.empty': 'Name cannot be empty',
  'string.pattern.base': 'Name must contain only letters',
  'string.min': 'Name must be at least {#limit} characters long',
  'string.max': 'Name cannot exceed {#limit} characters',
  'any.required': 'Name is required',
});

export const lastname = Joi.string().pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/).min(3).max(30).required().messages({
  'string.empty': 'Last name cannot be empty',
  'string.pattern.base': 'Lastname must contain only letters',
  'string.min': 'Lastname must be at least {#limit} characters long',
  'string.max': 'Lastname cannot exceed {#limit} characters',
  'any.required': 'Last name is required',
});

export const email = Joi.string().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required().messages({
  'string.empty': 'Email cannot be empty',
  'string.email': 'Invalid email format',
  'string.pattern.base': 'Invalid email address',
  'any.required': 'Email is required',
});

export const password = Joi.string().pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./]).*$/).min(8).max(30).required().messages({
  'string.empty': 'Password cannot be empty',
  'string.pattern.base': 'At least one uppercase letter and one number.',
  'string.min': 'Password must be at least {#limit} characters long',
  'string.max': 'Password cannot exceed {#limit} characters',
  'any.required': 'Password is required',
});

// Combined validation schema with translated and shortened messages
export const registerSchema = Joi.object({
  username,
  name,
  lastname,
  email,
  password,
}).messages({
  'object.unknown': 'Invalid field',
});
