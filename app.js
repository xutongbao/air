const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const compression = require('compression');

const app = express()
app.use(compression({ filter: shouldCompress }))
app.use(express.static('build'))
function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

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
