import React, { useState, useEffect } from 'react'
import Render from './components/Render'
import Input from './components/Input'
import axios from 'axios'
import personService from './services/persons'
import './index.css'




const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll] = useState(true)
  const [newSearch, setNewSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [footerMessage, setFooterMessage] = useState(null)
 

  

  useEffect(()=>{ 
   personService
        .getAll()
        .then(response => {
         setPersons(response)
   })

  }, [])

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
    if(newSearch !== null){
    setShowAll(false)
    }
    else{
      setShowAll(true)
    }
  }


  const removePerson = (id) => {

    console.log(id)
  if(window.confirm("Do you want to delete this person?")){
    personService
      .remove(id)
      .catch(error=> {
        setErrorMessage(`${newName} could not be deleted`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      .then(response=>{
        console.log(response.data)
        setPersons(persons.filter(p => p.id !== id))
        setFooterMessage(`Person ${newName} was deleted`)
     setTimeout(() => {
      setFooterMessage(null)
    }, 5000)
      })
    }
  }

  
  const addPerson = (event) => {

    event.preventDefault()
    const nameMap = persons.map(person => person.name)

    const personObject ={
      name: newName,
      number: newNumber
    }

    if(nameMap.includes(newName) === false){
      personService 
      .create(personObject) 
      .then(response =>{ 
    setPersons(persons.concat(personObject))
    setFooterMessage(`Person ${newName} was added`)
     setTimeout(() => {
      setFooterMessage(null)
    }, 5000)
      })
  }

  else{
    const person = persons.find(p => p.name === newName)
    const changedPerson ={...person, number: newNumber }

   if(window.confirm(`Do you want to change ${newName}? `)){

   personService
   .update(person.id, changedPerson)
   .catch(error=> {
     setErrorMessage(`Note '${newName}' was already removed from server`)
   })
   .then(response => {
     console.log(response)
       })
       setFooterMessage(`Number of '${newName}' was changed`)
     setTimeout(() => {
      setFooterMessage(null)
    }, 5000)
      
  
    }
  }
    setNewName('')
    setNewNumber('')
  
}
//useEffect(addPerson, [])

  return (
    <div>
      <h1>Phonebook</h1>

      
      <Footer message = {footerMessage}></Footer>
      <Notification message = {errorMessage}></Notification>
      

      <div>
        <Input text = 'search' value= {newSearch} event = {handleSearchChange}/>
          </div>
     
      <form onSubmit={addPerson} >
        <div>
          <h3>Add a new:</h3>
        </div>
        <div>
        <Input text =   'name' value= {newName} event = {handleNameChange}/>
          </div>
          <div>
          <Input text = 'number' value= {newNumber} event = {handleNumberChange}/>
          </div>
          <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      <Render persons = {persons} showAll = {showAll} newSearch={newSearch} remove = {removePerson} />
      </ul>
    </div>
  ) 
}

const Notification = ({ message }) => {
  if (message === null) {

    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const Footer = ({message}) => {
  const footerStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,  
    marginBottom: 10
  }

  if (message === null) {

    return null
  }

  return (
    <div style={footerStyle} className = "footer">
      <br />
      <em>{message}</em>
    </div>
  )
}




export default App

