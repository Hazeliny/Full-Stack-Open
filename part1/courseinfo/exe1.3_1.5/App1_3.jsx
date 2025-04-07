const Header = (props) => {
  console.log(props)
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
        <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Content1 = (props) => {
  console.log(props)
  return (
    <>
        <p>{props.name} {props.exercises}</p>
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

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} />
      <Content part={part2} />
      <Content part={part3} />
      <Content1 name={part1.name} exercises={part1.exercises} />
      <Content1 name={part2.name} exercises={part2.exercises} />
      <Content1 name={part3.name} exercises={part3.exercises} />
      <Total arrayParts={[part1, part2, part3]} />
  </div>
  )
}

export default App
