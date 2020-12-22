import React from 'react';
import ReactDOM from 'react-dom';

 

const Part = ({part}) => {
  return(
    <div>
    <p>{part.name}: {part.exercises}</p>
    </div>
  )
}


const Header = ({course}) =>{

  return(
  <div>
    <h1>
       {course.name}
    </h1>
  </div>
  )
}

const Reducer = (props) => { 
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







const Course = (props) =>{


const {course} = props

const parts = course.parts


  return(
    <div>

      <Header course = {course} />

      <ul>
  {parts.map(part => 
    <Part key = {part.id} part = {part} /> 
  )}
</ul>
 <Reducer parts = {parts}></Reducer>
</div>
  )
}
  


const Content = (props) => {
  return(
  <div>
    <Part part= {props.part1} exercises= {props.exercises1} ></Part>
    <Part part= {props.part2} exercises= {props.exercises2} ></Part>
    <Part part= {props.part3} exercises= {props.exercises3}></Part>
  </div>
  )
}




const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Reducer hell',
        exercises: 200,
        id: 4
      }

    ]
  }


  
 // <Header course = {course}></Header>

  return (  
    <div>
     
      <Course course = {course}></Course>
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))