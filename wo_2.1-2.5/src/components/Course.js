import React from 'react';

const Total = (props) => { 
    const {parts} = props
    
    return(
      <div>
      <ul>
      <p> Total of {parts.map(part => 
  part.exercises).reduce((sum, val) => sum+val)} exercises </p>
      </ul>
      </div>
      
    )
    
  }

const Header = ({course}) =>{

    return(
    <div>
      <h2>
         {course.name}
      </h2>
    </div>
    )
  }

const Part = ({part}) => {
    return(
      <div>
      <p>{part.name}: {part.exercises}</p>
      </div>
    )
  }

const Course = ({course}) =>{

    const parts = course.parts
    
      return(
        <div>
    
          <Header course = {course} />
    
          <ul>
      {parts.map(part => 
        <Part key = {part.id} part = {part} /> 
      )}
    </ul>
     <Total parts = {parts}></Total>
    </div>
      )
}

export default Course