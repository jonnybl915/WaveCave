/***********************
* FILTERS
*
***********************/
'use strict'

const Boom = require('boom')
const Uuid = require('node-uuid')
const Joi = require('joi')

// This will wrap all FILTER routes.
exports.register = (server, options, next) => {
  // reference variable for the database
  const db = server.app.db

  /***********************
  *  ROUTES
  ***********************/
  server.route({
    // find ALL filters
    method: 'GET',
    path: '/filters',

    handler(request, reply) {
      db.filters.find( (err, data) => {

        if ( err ) { return reply( Boom.wrap(err, 'Internal MongoDB error') ) }

        reply( data )
      })
    }
  })

  server.route({
    method: 'GET',
    path: '/filters/{id}',

    handler(request, reply) {
      
    }
  })
}
