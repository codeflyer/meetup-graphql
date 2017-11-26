// Require the framework and instantiate it
const {pick} = require('lodash')
const personApi = require('../api/person')
const seriesApi = require('../api/series')

module.exports = (fastify) => {
  fastify.get('/', function (request, reply) {
    reply.send({status: 'OK'})
  })

  fastify.get('/people', async (request, reply) => {
    reply.send(personApi.getPeople())
  })

  fastify.get('/people/:id', async (request, reply) => {
    reply.send(
      (await personApi.getPerson(request.params.id))
    )
  })

  fastify.get('/series', async (request, reply) => {
    reply.send(
      (await seriesApi.getSeries())
        .map(show =>
          pick(show,
            ['id', 'url', 'name', 'genres',
              'officialSite', 'image', 'summary']
          )
        )
    )
  })

  fastify.get('/series/:id', async (request, reply) => {
    reply.send(
      (await seriesApi.getShow(Number(request.params.id)))
    )
  })

  fastify.get('/series/:id/webchannel', async (request, reply) => {
    reply.send(
      (await seriesApi.getShow(Number(request.params.id))).webChannel
    )
  })

  fastify.get('/series/:id/episodes', async (request, reply) => {
    reply.send(
      (await seriesApi.getShow(Number(request.params.id)))._embedded.episodes
    )
  })

  fastify.get('/seriesfull', async (request, reply) => {
    reply.send(seriesApi.getSeries())
  })
}
