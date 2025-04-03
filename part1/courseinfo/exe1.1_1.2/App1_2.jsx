const Header = (props) => {
  console.log(props)
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = ({element}) => {
  return (
    <>
      <p>{element.part} {element.exercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  const { parts } = props;
  return (
    <>
        <Part element={parts[0]} />
        <Part element={parts[1]} />
        <Part element={parts[2]} />
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

const Total1 = ({arrayParts1}) => {
  return (
    <>
      <p>Number of exercises {arrayParts1.reduce((sum, currentValue) => sum + currentValue, 0)}</p>
    </>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total arrayParts={parts} />
      <Total1 arrayParts1={parts.map(ele => ele.exercises)}/>
  </div>
  )
}

export default App
