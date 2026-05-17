import dotenv from 'dotenv'

dotenv.config()

const nodeEnv = process.env.NODE_ENV ?? 'development'

const parsePort = (value: string | undefined) => {
  const port = Number(value ?? 4000)

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error('PORT must be a positive integer')
  }

  return port
}

const parseMongoUri = (value: string | undefined) => {
  const mongoUri = value?.trim() ?? ''

  if (!mongoUri && nodeEnv !== 'test') {
    throw new Error('MONGODB_URI is required')
  }

  return mongoUri
}

export const env = {
  nodeEnv,
  port: parsePort(process.env.PORT),
  clientOrigin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173',
  mongoUri: parseMongoUri(process.env.MONGODB_URI),
}
