import { useState } from 'react'

const Display = props => <div><h2>{props.value}</h2></div>
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newGood => {
    console.log('good now ', newGood)
    setGood(newGood)
  }

  const setToNeutral = newNeutral => {
    console.log('neutral now ', newNeutral)
    setNeutral(newNeutral)
  }
  
  const setToBad = newBad => {
    console.log('bad now ', newBad)
    setBad(newBad)
  }

  return (
    <div>
      <Display value={"give feedback"} />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Display value={"statistics"} />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App
