import React, {useEffect, useState} from "react";
import axios from "axios";
import CSS from "csstype";
import {Link} from "react-router-dom";

interface Menu {
  id: number
  name: string
  path: string
}

function App() {
  const [menu, setMenu] = useState<Array<Menu>>([])
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/exercisesMenu')
      .then(response => {
        console.log('promise fulfilled', response)
        setMenu(response.data)
      })
  }
  useEffect(hook, [])
  console.log('render', menu.length, 'menu')
  const ulStyle: CSS.Properties = {
    textAlign: 'left'
  }


  return (
    <div className="App">
      <h1>Menu</h1>
      <ul style={ulStyle}>
        {menu.map(item =>
          <li key={item.id}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
