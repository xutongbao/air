let baseURL = 'http://localhost:81'
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:81' //"http://localhost:81"
} else {
  baseURL = 'https://efficacious-tiny-infinity.glitch.me'
}

export { baseURL }