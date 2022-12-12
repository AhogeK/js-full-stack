import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const notes = [
  {
    key: 1,
    note: "This is note one",
    important: true
  },
  {
    key: 2,
    note: "This is note two",
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App notes={notes}/>
    </React.StrictMode>,
)
