const jsonServer = require('json-server')
const path = require('path')
const express = require('express')
const isAuthorized = require('./isAuthorized');


const server = jsonServer.create()
const pathData = path.join(__dirname, 'db.json')
const middlewares = jsonServer.defaults({ static: './public', noCors: true})
const router = jsonServer.router(pathData);

const PORT = 3001
server.use('/db', middlewares, router)
server.use(express.static('./build'))


server.listen(PORT, () => {
   console.log(`Server is running in http://localhost:${PORT}`)
  console.log(`Data Base is running in http://localhost:${PORT}/db`)
});