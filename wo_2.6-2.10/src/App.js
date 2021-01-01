import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '04444444' } 
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll] = useState(true)
  const [newSearch, setNewSearch] = useState('')

  const Render = () => {
    
  }

const filter = showAll ? persons : persons.filter(person=>person.name.toLowerCase.includes(newSearch))
 

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  
  const addPerson = (event) => {

    const nameMap = persons.map(person => person.name)

    event.preventDefault()
    const personObject ={
      name: newName,
      number: newNumber
    }

    if(nameMap.includes(newName) === false){
    setPersons(persons.concat(personObject))
  }

  else{
   window.alert(`${newName} is already added to phonebook`)
  }
    setNewName('')
  
}

  return (
    <div>
      <h1>Phonebook</h1>
      
      <div>
          search:    <input 
          value = {newSearch} 
          onChange={handleSearchChange}>
          </input>
          <button onClick ={() => setShowAll(!showAll)}>search{filter}</button>
          </div>
     
      <form onSubmit={addPerson} >
        <div>
          <h3>Add a new:</h3>
        </div>
        <div>
          name:    <input 
          value = {newName} 
          onChange={handleNameChange}>
          </input>
          </div>
          <div>
          number: <input 
          value = {newNumber} 
          onChange={handleNumberChange}></input>  
          </div>
          <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      
      </ul>
    </div>
  )

}

export default App