const { Model} = require('sequelize');

import sequelize from '../config/db'

const { DataTypes } = require('sequelize');
interface UserAttributes {
  id: number;
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;

}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public name!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;


}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },

}, {
  sequelize,
  modelName: 'Users',
});
User.sync()
export default User;