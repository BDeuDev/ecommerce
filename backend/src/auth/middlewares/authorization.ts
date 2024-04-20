import { Request, Response } from 'express';
import jwt from '../handlers/jwt';



const authorization = async (req: Request, res: Response) => {
    try {
        const { username} = req.body;

        const token = await jwt.tokenSing(username);

        res.status(200).json({token})
    } catch (err) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
export default authorization;