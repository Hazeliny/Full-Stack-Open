import { useState } from 'react'

const Display = props => <div><h2>{props.value}</h2></div>
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const avg = all === 0 ? 0 : (props.good - props.bad) / all
  const pos = all === 0 ? 0 : (props.good / all) * 100

  return (
  <table>
    <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={`${pos}%`} />
    </tbody>
  </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [haveFeedback, setHaveFeedback] = useState(false)

  const setToGood = newGood => {
    console.log('good now ', newGood)
    setGood(newGood)
    setHaveFeedback(true)
  }

  const setToNeutral = newNeutral => {
    console.log('neutral now ', newNeutral)
    setNeutral(newNeutral)
    setHaveFeedback(true)
  }
  
  const setToBad = newBad => {
    console.log('bad now ', newBad)
    setBad(newBad)
    setHaveFeedback(true)
  }

  return (
    <div>
      <Display value={"give feedback"} />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Display value={"statistics"} />
      {haveFeedback ? <Statistics good={good} neutral={neutral} bad={bad} /> : <p>No feedback given</p>}
    </div>
  )
}

export default App
