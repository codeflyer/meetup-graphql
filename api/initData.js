const peopleList = [
  { id: 1, firstName: 'Davide', lastName: 'Fiorello', age: 22 },
  { id: 2, firstName: 'Jack', lastName: 'The Ripper', age: 32 },
  { id: 3, firstName: 'Ciccio', lastName: 'Pasticcio', age: 42 },
]

const personApi = require('./person')
const init = async () => {
  await personApi.init()

  for (let i = 0; i < peopleList.length; i++) {
    await personApi.addPerson(peopleList[i].firstName, peopleList[i].lastName, peopleList[i].age)
  }
}

init()
