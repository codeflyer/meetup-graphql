// Require the framework and instantiate it
const {graphqlFastify, graphiqlFastify} = require('fastify-apollo')

const schema = require('./schema')

module.exports = (fastify) => {
  fastify.register(graphqlFastify, {
    schema,
    prefix: '/graphql'
  })

  fastify.register(graphiqlFastify, {
    endpointURL: '/graphql',
    prefix: '/graphiql'
  })
}
