import { DataTypes } from 'sequelize'
import db from '../db/connection'

const User = db.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  fullname: {
    type: DataTypes.STRING(255),
  },
  email: {
    type: DataTypes.STRING(255),
  },
  password: {
    type: DataTypes.STRING(255),
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
})

export default User