import validateData from "../handlers/joi";
import registerSchema from "../schemas/register";
import { Request, Response, NextFunction } from 'express';

const registerData = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { username, name, lastname, email, password } = req.body;

    const data = { username, name, lastname, email, password };

    const isValid = await validateData(data, registerSchema);

    if (isValid) {
      return res.status(400).json({ error: 'Invalid data entry' });
    }
    next();
  } catch (err) {
    console.error('Error interno del servidor:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
  
  export default registerData;