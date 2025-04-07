const Header = (props) => {
  console.log(props)
  return (
    <>
    <h1>{props.coursename.name}</h1>
    </>
  )
}

const Header2 = ({coursename}) => {
  console.log(coursename)
  return (
    <>
    <h2>{coursename}</h2>
    </>
  )
}

const Part = ({ele}) => {
  return (
    <>
      <p>{ele.name} {ele.exercises}</p>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
        <Part ele={parts[0]} />
        <Part ele={parts[1]} />
        <Part ele={parts[2]} />
    </>
  )
}

const Total = ({arrayParts}) => {
  return (
    <>
      <p>Number of exercises {arrayParts.reduce((sum, currentValue) => sum + currentValue.exercises, 0)}</p>
    </>
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
      <Header coursename={course}/>
      <Header2 coursename={course.name}/>
      <Content parts={course.parts} />
      <Total arrayParts={course.parts} />
  </div>
  )
}

export default App
