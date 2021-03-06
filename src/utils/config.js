const baseURL = {
  // 使用反向代理解决跨域时，dev应为空字符串
  dev: 'http://localhost:81',
  //test: 'https://efficacious-tiny-infinity.glitch.me',
  test: 'http://39.97.238.175:81',
  // 使用yarn build打包，所有接口使用这个url，需要服务器解决跨域
  prod: 'http://39.97.238.175'
}[process.env.REACT_APP_MODE]

const nodeBaseURL = {
  dev: 'http://localhost:81',
  // test: 'https://efficacious-tiny-infinity.glitch.me',
  // prod: 'https://efficacious-tiny-infinity.glitch.me',
  test: 'http://39.97.238.175:81',
  prod: 'http://39.97.238.175',
}[process.env.REACT_APP_MODE]

export { baseURL, nodeBaseURL }