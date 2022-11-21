import {useState} from 'react'

// a proper place to define a component
const Statistics = ({goodNum, neutralNum, badNum}) => {
  if (goodNum > 0 || neutralNum > 0 && badNum > 0) {
    const all = goodNum + neutralNum + badNum
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tr>
            <td>good</td>
            <td>{goodNum}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutralNum}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{badNum}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(goodNum * 1 + badNum * -1) / all}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{goodNum / all * 100}%</td>
          </tr>
        </table>
      </>
    )
  }
  return (
      <>
        <h1>statistics</h1>
        <span>No feedback given</span>
      </>
  )
}

const Button = ({onClick, text}) => {
  return (
      <button onClick={onClick}>
        {text}
      </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text={"good"}/>
        <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"}/>
        <Button onClick={() => setBad(bad + 1)} text={"bad"}/>
        <Statistics goodNum={good} neutralNum={neutral} badNum={bad} />
      </div>
  )
}

export default App
