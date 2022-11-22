import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const Button = ({className, onClick, text}) => {
  return (
      <button className={className} onClick={onClick}>
        {text}
      </button>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(Array(7).fill(0))

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <div className="Content">
            {anecdotes[selected]}
          </div>
          <div>has {points[selected]} votes</div>
          <div className="Button">
            <Button className="Button-item" onClick={() => {
              const copy = [...points]
              copy[selected] += 1
              setPoints(copy)
            }} text={"vote"}/>
            <Button className="Button-item" onClick={() => {
              if (selected < 6) {
                setSelected(selected + 1)
              } else {
                setSelected(0)
              }
            }} text={"next anecdote"}/>
          </div>
        </header>
      </div>
  );
}

export default App;
