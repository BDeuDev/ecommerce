import { Request, Response } from 'express';
import { createUser } from '../../server/userServer';

const registerUser = async (req: Request, res: Response) => {
    const { username, name, lastname, email, password } = req.body;

    try {
        const user = await createUser(username, name, lastname, email, password);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: 'Error al crear el usuario.' });
    }
}
export default registerUser;