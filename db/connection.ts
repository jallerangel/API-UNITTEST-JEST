import { Sequelize } from 'sequelize';
import config from '../config';
const { dbHost, dbUser, dbName, dbPassword } = config

const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
  // logging: false 
})

