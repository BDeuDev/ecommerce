import jwt, { JwtPayload } from 'jsonwebtoken'
import * as dotenv from 'dotenv';
import TokenVerificationResult from '../../interfaces/IJwtPayload';
dotenv.config();

const tokenSing = async (result:string) => {
    if (!process.env.JWT_KEY) {
        throw new Error('La clave JWT no está definida en las variables de entorno');
    }
    return jwt.sign({
        username:result,
    },process.env.JWT_KEY,
        {
            expiresIn: '2h',
        }
    )
}
const verifyToken =  (token:string):TokenVerificationResult => {
    if (!process.env.JWT_KEY) {
        throw new Error('La clave JWT no está definida en las variables de entorno');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY) as JwtPayload;
        return { valid: true, data: decoded };
    } catch (err:any) {
        return { valid: false, error: err.message };
    }
};
export default {tokenSing,verifyToken};