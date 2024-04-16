import { Request, Response } from 'express';
import { createUser } from '../../server/userServer';

const registerUser = async (req: Request, res: Response) => {
    const { username, name, lastname, email, password } = req.body;

    createUser(username, name, lastname, email, password)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({ error: err.message }));
}
export default registerUser;