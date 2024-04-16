import { Sequelize } from 'sequelize';
import * as configData from './config.json';

const config: any = configData;

const env = process.env.NODE_ENV ?? 'development';
const { username, password, database, host, dialect } = config[env];

const sequelize = new Sequelize({
  dialect: dialect,
  host: host,
  username: username,
  password: password,
  database: database,
});

export default sequelize;