import bcrypt from "../auth/handlers/bcrypt";
import User from "../models/User";

async function createUser(username: string, name: string, lastname: string, email: string, password: string) {
  try {
    const hashPassword = await bcrypt.encrypt(password);
    await User.create({
      username,
      name,
      lastname,
      email,
      password: hashPassword,
    });

    return { state: 'User created' };
  } catch (error) {
    return console.error('Error al crear el usuario:', error);
  }
};
async function userExists(username: string) {
  const userExist = await User.findOne({ where: { username } });
  return userExist;
}
async function login(username: string, password: string) {
  try {
    const user = await User.findOne({ where: { username: username } });

    if (user) {
      const hashPassword = user.dataValues.password;
      const isValid = await bcrypt.compare(password, hashPassword);

      if (isValid) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};
export { createUser, userExists, login }