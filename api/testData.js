const personApi = require('./person')
const test = async () => {
  const people = await personApi.getPeople()
  console.log(people)
}

test()
