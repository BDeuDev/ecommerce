import { Request, Response } from 'express';
import jwt from '../handlers/jwt';



const authorization = async (req: Request, res: Response, next: any) => {
    try {
        const { username} = req.body;

        const token = await jwt.tokenSing(username);

        res.status(200).json({token})
    } catch (err) {
        console.error('Error al autorizar', err)
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
export default authorization;