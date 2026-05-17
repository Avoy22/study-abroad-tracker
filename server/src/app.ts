import cors from 'cors'
import express, { type ErrorRequestHandler } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import { env } from './config/env.js'
import healthRoutes from './routes/health.routes.js'

export const createApp = () => {
  const app = express()

  app.use(helmet())
  app.use(cors({ origin: env.clientOrigin }))
  app.use(express.json())
  app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'))

  app.get('/', (_req, res) => {
    res.json({
      name: 'Study Abroad Tracker API',
      status: 'ready',
    })
  })

  app.use('/api/v1/health', healthRoutes)

  app.use((_req, res) => {
    res.status(404).json({ error: 'Not Found' })
  })

  const errorHandler: ErrorRequestHandler = (err: Error & { status?: number }, _req, res, _next) => {
    void _next
    console.error(err)

    res.status(err.status ?? 500).json({ error: 'Internal Server Error' })
  }

  app.use(errorHandler)

  return app
}
