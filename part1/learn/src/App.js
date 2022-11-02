import React, {useState} from "react";
import Comment from "./components/Comment";

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
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const App = () => {

  // arrowFunction()

  const [now, setNow] = useState(new Date());
  window.setInterval(() => {
    setNow(new Date())
  }, 1000)
  const a = 10
  const b = 20

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
      </>
  )
}

export default App
