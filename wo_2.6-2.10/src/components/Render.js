import React from 'react'
import Person from './Person'

const Render = (props) =>{

    const persons = props.persons
    const showAll = props.showAll
    const filter = showAll ? persons : persons.filter(person=>person.name.toLowerCase().includes(props.newSearch))
 
    
    return(
    <div>
    {filter.map(person => 
      <Person key = {person.name} person = {person} />
      )}
      </div>
    )
  }

  export default Render