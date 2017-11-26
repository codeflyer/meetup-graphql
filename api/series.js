const adapter = require('./adapter').series
const low = require('lowdb')

module.exports = {
  getSeries: async ({limit = 5, offset = 0}) => {
    const db = await low(adapter)
    return db.get('series').slice(offset, limit + offset).value()
  },
  getShow: async (id) => {
    const db = await low(adapter)
    return db
      .get('series')
      .find(show => show.id === id)
      .value()
  }
}
