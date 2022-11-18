import React, {useState} from "react";
import Comment from "./components/Comment";
import Display from "./components/Display";
import Button from "./components/Button";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

class Welcome2 extends React.Component {
  render() {
    return <h1>你好！👋 {this.props.name}</h1>
  }
}

const comment = {
  date: new Date(),
  text: '我TM跟你爆了！！！',
  author: {
    name: '叫我王浩哲',
    avatarUrl: 'http://placekitten.com/g/128/128'
  }
};

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
  )
}

const App = () => {

  // arrowFunction()

  const [now, setNow] = useState(new Date());
  window.setInterval(() => {
    setNow(new Date())
  }, 1000)
  const a = 10
  const b = 20

  const name = "渝增"
  const age = 24

  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
      <>
        <p>Hello World, it is {now.toString()}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
        {Welcome({name: '王浩哲'})}
        <Welcome2 name={"王浩哲2号"}/>
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}/>
        <h1>Greetings</h1>
        <Hello name={"林滋剑"} age={26 + 10}/>
        <Hello name={name} age={age}/>
        <div>
          <Display counter={counter}/>
          <Button onClick={increaseByOne} text={"plus"} />
          <Button onClick={setToZero} text={"zero"} />
          <Button onClick={() => setCounter(counter - 1)} text={"minus"}/>
        </div>
      </>
  )
}

export default App
