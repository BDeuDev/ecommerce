import validateData from "../handlers/joi";
import RegisterData from "../schemas/registerData";
import { Request, Response } from 'express';

const registerData = async (req: Request, res: Response, next: any) => {
    try {
  
      const { username, name, lastname, email, password } = req.body;

      const data = { username: username, name: name, lastname: lastname, email: email, password: password }
  
      validateData(data, RegisterData)
        .then((value) => {
          if (value) return res.status(400).json({ error: 'Invalid data entry' })
          else return next();
        })
        .catch(err => res.status(500).json({ error: err }))
  
    } catch (err) {
      res.status(500).json({ error: 'Error interno del servidor : ',err });
    }
  };
  
  export default registerData;