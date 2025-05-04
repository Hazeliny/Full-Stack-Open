import { useState } from 'react'

const Display = props => <div><h2>{props.value}</h2></div>
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const All = ({ good, neutral, bad }) => (
  <p>all {good + neutral + bad}</p>
)

const Average = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const avg = total === 0 ? 0 : (good - bad) / total
  return <p>average {avg}</p>
}

const Positive = ({ good, neutral, bad }) => {
  const tol = good + neutral + bad
  const pos = tol === 0 ? 0 : (good / tol) * 100
  return <p>positive {pos}%</p>
}

const Statistics = (props) => {
  return (
  <>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <All good={props.good} neutral={props.neutral} bad={props.bad} />
    <Average good={props.good} neutral={props.neutral} bad={props.bad} />
    <Positive good={props.good} neutral={props.neutral} bad={props.bad} />
  </>
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
