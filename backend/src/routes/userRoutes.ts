
import express from 'express';
import registerData from '../auth/middlewares/registerData';
import existingUser from '../auth/middlewares/existingUser';
import registerUser from '../auth/middlewares/registerUser';
import loginData from '../auth/middlewares/loginData';
import passwordCheck from '../auth/middlewares/passwordCheck';
import authorization from '../auth/middlewares/authorization';
import { URL_LOGIN, URL_REGISTER } from '../config/url';


const router = express.Router();

router.post(`${URL_REGISTER}`, registerData,existingUser,registerUser);
router.post(`${URL_LOGIN}`,loginData,passwordCheck,authorization)



export = router;