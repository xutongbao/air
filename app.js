const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
app.use(express.static('build'))

//通过代理解决跨域
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://192.168.1.60:81',
    changeOrigin: true,
  })
)

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
})
