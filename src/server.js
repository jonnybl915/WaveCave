/***********************
* Node backed w/ Hapi
* --- *
* WaveForm
***********************/
'use strict'

const Hapi = require('hapi')
const Inert = require('inert')
const Mongojs = require('mongojs')

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 3473
})

// Register Inert and routes with Hapi.
server.register([
  Inert,
  require('./routes/filters')], (err) => {
    if (err) { throw err }
  }
)


/***********************
*  DATABASE
* // the db is on a remote server (the port default to mongo)
* let db = mongojs('example.com/mydb', ['mycollection'])
* localhost:27017
***********************/
const databaseUrl = 'waveform-db' // "username:password@example.com/mydb"
const collections = ['filters']
server.app.db = Mongojs(databaseUrl, collections)


/***********************
*  INERT
* --- *
* Static serving of files. Web requests are all GET requests, and the
* path is basically saying "anything" here. Retrieve the specified files
* from the public/ directory (where your gulpfile should be outputting
* to) and return them.
***********************/
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './public/',
      redirectToSlash: true,
      index: true
    }
  }
})


// Start it up!
server.start((err) => {
  if (err) { throw err }

  console.log('Server running at:', server.info.uri)
})
