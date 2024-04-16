
import express from 'express';
import registerData from '../auth/middlewares/registerData';


const router = express.Router();


router.post(`/register`, registerData,async(req,res)=>{
    res.status(200).json({Ok:'ok'})
});



export = router;