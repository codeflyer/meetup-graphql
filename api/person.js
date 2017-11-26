const adapter = require('./adapter').people
const low = require('lowdb')

module.exports = {
  init: async () => {
    const db = await low(adapter)
    return db.defaults({ people: [] }).write()
  },
  addPerson: async (firstName, lastName, age) => {
    const db = await low(adapter)
    return db.get('people')
        .push({ firstName, lastName, age })
        .last()
        .assign({ id: Date.now().toString() })
        .write()
  },
  getPeople: async () => {
    const db = await low(adapter)
    return db.get('people').value()
  },
  getPerson: async (id) => {
    console.log(id)
    const db = await low(adapter)
    return db
        .get('people')
        .find(person => person.id === id)
        .value()
  }
}