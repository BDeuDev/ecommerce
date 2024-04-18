import { Request, Response } from 'express';
import validateData from '../handlers/joi';

import loginSchema from '../schemas/login';


const loginData = async (req: Request, res: Response, next: any) => {
    try {
  
      const { username, password } = req.body;
      const data = { username: username, password: password }
  
      await validateData(data, loginSchema)
        .then((value) => {
          if (value) return res.status(400).json({ error: 'Datos no validos' })
          else return next();
        })
        .catch(err => res.status(500).json({ error: err }))
  
    } catch (err) {
      res.status(500).json({ error: 'Error interno del servidor : ',err });
    }
  };
  export default loginData