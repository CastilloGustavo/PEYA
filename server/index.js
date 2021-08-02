const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const isAuthorized = require('./isAuthorized')
const PORT = 3001
server.use(middlewares)
// server.use(isAuthorized)
console.log(__dirname);
server.use(router)
server.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})