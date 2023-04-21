import dotenv from 'dotenv'
import Server from './models/server'
import usersRouter from './routes/users.routes'

//Config dotenv
dotenv.config()

const server = new Server()

server.listen()