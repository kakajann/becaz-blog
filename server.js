const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')
require('dotenv').config()

const { BACKEND_IP } = process.env

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use('/api', createProxyMiddleware({
    target: BACKEND_IP,
    pathRewrite: { '^/api': '/' },
    secure: false,
    changeOrigin: false,
  }))

  server.get('*', (req, res) => handle(req, res))

  server.listen(3000, (err) => {
    if (err)
      throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
