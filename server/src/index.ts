import mongoose from 'mongoose'

import { createApp } from './app.js'
import { env } from './config/env.js'

const app = createApp()

void (async () => {
  try {
    await mongoose.connect(env.mongoUri)

    app.listen(env.port, () => {
      console.log(`Server listening on http://localhost:${env.port}`)
    })
  } catch (error) {
    console.error('Failed to connect to MongoDB', error)
    process.exit(1)
  }
})()
