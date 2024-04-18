import { Request, Response } from 'express';
import { login } from '../../server/userServer';


const passwordCheck = async (req: Request, res: Response, next: any) => {
    try {
        const { username,password } = req.body;
        await login(username,password)
            .then((login)=>{
                if(!login) res.status(400).json({state:login});
                else next();
            })

    } catch (err) {
        res.status(500).json({ error: 'Error interno del servidor :', err });
    }
}
export default passwordCheck;