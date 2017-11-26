const {makeExecutableSchema} = require('graphql-tools')

const seriesApi = require('../api/series')

const typeDefs = `
  type Country {
    name: String
    code: String
    timezone: String
  }
  
  type WebChannel {
    id: Int
    name: String
    country: Country
  }
  
  type Episode {
    id: Int
    url: String
    name: String
    season: Int
    number: Int
    airdate: String
    arirtime: String
    image: Image
    summary: String
  }
  
  type Show {
    # The identifier of the show
    id: Int
    
    # The name of the show
    name: String
    
    # The official URL
    url: String
    
    genres: [String]
    
    officialSite: String 
    summary: String
    
    image: Image 
    
    webChannel: WebChannel
    
    episodes(season: Int): [Episode]
  }
  
  type Image {
    medium: String
    original: String
  }

  type Query {
    series(limit: Int, offset: Int): [Show],
    show(idShow: Int!): Show
  }
`

const resolvers = {
  Query: {
    series: (state, params, context) => seriesApi.getSeries(params),
    show: (state, params, context) => seriesApi.getShow(params.idShow)
  },
  Show: {
    episodes: (state, params, context) => {
      if (params.season) {
        return state._embedded.episodes.filter(episode => episode.season === params.season)
      }
      return state._embedded.episodes
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema
