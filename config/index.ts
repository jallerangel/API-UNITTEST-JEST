import dotenv from 'dotenv'

dotenv.config()

const config: Record<string, string> = {
  dbName: process.env.DB_NAME!,
  dbUser: process.env.DB_USERNAME!,
  dbPassword: process.env.DB_PASSWORD!,
  dbHost: process.env.DB_HOST!,
  port: process.env.PORT!,
  origin1: process.env.ORIGIN!,
  origin2: process.env.ORIGIN2!,
}

export default config