import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'
 







const Courses = ({courses}) =>{

  //const [courses] = props
  //const course = courses.course

  return(
    <div>
      <h1>Web developement curriculum</h1>
      <ul>
        <p>
          {courses.map(courses =>
          <Course key = {courses.id} course = {courses}/>
            )}
        </p>
      </ul>
    </div>
  )

}




const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  
 // <Header course = {course}></Header>

  return (  
    <div>
     
      <Courses courses = {courses}></Courses>
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))