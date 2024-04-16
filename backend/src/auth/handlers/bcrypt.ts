import bcrypt from 'bcrypt'

function encrypt (textPlain:string){
    return bcrypt.hash(textPlain, 10);
}
//Compares the text plain of the password with the hash password an return true or false
function compare(passwordPlain:string, hashPassword:string){
        return bcrypt.compare(passwordPlain, hashPassword);
}
export default {encrypt,compare}