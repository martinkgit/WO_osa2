import React from 'react'
import Person from './Person'

const Render = (props) =>{

    const persons = props.persons
    console.log(persons)
    const showAll = props.showAll
    console.log(showAll )
    const filter = showAll ? persons : persons.filter(person=>person.name.toLowerCase().includes(props.newSearch))
    

    return(
    <div>
    {filter.map(person => 
      <li key = {person.id}>
        {person.name}: {person.number} 
       <button onClick={() => {props.remove(person.id)}}>delete</button>
       </li>
      )}
      </div>
    )
  }

  export default Render