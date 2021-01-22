import { createProxyMiddleware } from 'http-proxy-middleware'
import 'dotenv/config'

export default createProxyMiddleware({
  target: process.env.BACKEND_IP,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/',
  },
  prependPath: true,
})
