import express, { Application } from 'express'
import userRouter from '../routes/users.routes'
import cors from 'cors'
import morgan from 'morgan'
import options from '../utils/cors'
import config from '../config'
class Server {

  private app: Application
  private port: string
  private apiPaths = {
    users: '/api/users'
  }
  constructor() {
    this.app = express()
    this.port = config.port

    //Define my middlewares
    this.middlewares()

    //Define my routes
    this.routes()
  }

  routes() {
    this.app.use(this.apiPaths.users, userRouter)
  }

  // ToDO: Connect to DataBase

  middlewares() {

    // LOGGER
    this.app.use(morgan('dev'))

    // CORS
    this.app.use(cors(options))

    // BODYPARSER
    this.app.use(express.json())

    // PUBLIC DIR
    this.app.use(express.static('public'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on http://localhost:${this.port}`)
    })
  }
}

export default Server