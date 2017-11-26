const path = require('path')
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const people = new FileAsync(path.resolve(__dirname, '../data', 'db.json'))
const series = new FileAsync(path.resolve(__dirname, '../data', 'series.json'))

module.exports = {
  people,
  series
}
