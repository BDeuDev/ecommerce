import { NextFunction, Request, Response } from 'express';
import { userExists } from '../../server/userServer';
import { performance } from 'perf_hooks';

 const existingUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { username } = req.body;
    
    try {
        const start = performance.now();
        const doesUserExist = await userExists(username);
        const end = performance.now();
        console.log(`Execution time: ${end - start} ms`);
        if (doesUserExist) {
            res.status(409).json({ error: 'User already exists' });
        } else {
            next();
        }
    } catch (err) { 
        res.status(500).json({ error: 'Internal server error'});
    }
}

export default existingUser; 