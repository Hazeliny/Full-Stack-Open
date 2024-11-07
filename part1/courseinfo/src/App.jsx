import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.index} {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {
        props.parts.map((part, index) => (
          <Part key={index} part={part.name} exercises={part.exercises} index={index + 1} />
        ))
      }
    </div>  
  )
}

const Total = (props) => {
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p> Total number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
