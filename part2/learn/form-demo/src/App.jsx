import {useState} from 'react'
import Note from "./note.jsx";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [noteImportant, setNoteImportant] = useState(false)
  const [showAll, setShowAll] = useState(true)

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleShowAllChange = () => {
    setShowAll(!showAll)
  }

  const handleImportantChange = () => {
    setNoteImportant(!noteImportant)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const newNoteObj = {
      key: Date.now(),
      note: newNote,
      important: noteImportant
    }

    setNotes(notes.concat(newNoteObj))
    setNewNote('')
  }

  return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notesToShow.map(note =>
              <Note key={note.key} note={note.note}/>
          )}
        </ul>
        <label form="showAll">Show All</label>
        <input type="checkbox" id="showAll" checked={showAll} onChange={handleShowAllChange}/>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange}/>
          <br/>
          <input type="checkbox" id="important" name="important" checked={noteImportant}
                 onChange={handleImportantChange}/>
          <label form="important">important</label>
          <br/>
          <button type="submit">save</button>
        </form>
      </div>
  )
}

export default App
