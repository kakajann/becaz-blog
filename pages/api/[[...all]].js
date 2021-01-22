import { createProxyMiddleware } from 'http-proxy-middleware'

export default createProxyMiddleware({
  target: 'https://api.becaz.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/',
  },
  prependPath: true,
})
