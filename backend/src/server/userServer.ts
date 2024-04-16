import bcrypt from "../auth/handlers/bcrypt";
import User from "../models/User";

async function createUser (username:string,name:string,lastname:string,email:string,password:string){
    try {
      const hashPassword = await bcrypt.encrypt(password);
      const newUser = await User.create({
        username,
        name,
        lastname,
        email,
        password:hashPassword,
      });
  
      return {success:true};
    } catch (error) {
      return console.error('Error al crear el usuario:', error);
    }
  };