
import express from 'express';
import registerData from '../auth/middlewares/registerData';
import existingUser from '../auth/middlewares/existingUser';
import registerUser from '../auth/middlewares/registerUser';


const router = express.Router();


router.post(`/register`, registerData,existingUser,registerUser);



export = router;