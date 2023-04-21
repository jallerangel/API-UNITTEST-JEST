import { DataTypes } from 'sequelize'
import db from '../db/connection'

const User = db.define('User', {
  fullname: {
    type: DataTypes.STRING(255),
  },
  email: {
    type: DataTypes.STRING(300),
  },
  password: {
    type: DataTypes.STRING(255),
  },
  status: {
    type: DataTypes.BOOLEAN,
  },
})

export default User