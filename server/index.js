// Require the framework and instantiate it
const fastify = require('fastify')()
const routes = require('./routes')
const gql = require('./gql')

routes(fastify)
gql(fastify)

// Run the server!
fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
