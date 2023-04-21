import Server from './models/server'
import usersRouter from './routes/users.routes'
import validatorEnv from './utils/validatorEnv'
import config from './config'

validatorEnv(config)

const server = new Server()

server.listen()