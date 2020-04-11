import express from 'express'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
const app = express()

// Import and Set Nuxt.js options
// eslint-disable-next-line import/first
import config from '../nuxt.config'
config.dev = process.env.NODE_ENV !== 'production'

async function start(): Promise<void> {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
