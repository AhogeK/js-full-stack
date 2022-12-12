# Fullstack Part2 从渲染集合到模块学习

## 从渲染集合到模块学习

### JavaScript Arrays

* [数组](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [JavaScript中的函数式编程](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
    * [高阶函数](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
    * [map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2)
    * [Reduce基础知识](https://www.youtube.com/watch?v=Wl98eZpkp-c&t=31s)

### Rendering Collections

```jsx
const App = (props) => {
  const {notes} = props

  return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note =>
              <li>
                {note.content}
              </li>
          )}
        </ul>
      </div>
  )
}
```

### Key-attribute

* [List and Keys - React](https://reactjs.org/docs/lists-and-keys.html#keys)

```jsx
const App = (props) => {
  const {notes} = props

  return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note =>
              <li key={note.id}>
                {note.content}
              </li>
          )}
        </ul>
      </div>
  )
}
```

* [Recursing on Children](https://reactjs.org/docs/reconciliation.html#recursing-on-children)

### Map

* [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Anti-pattern: Array Indexes as Keys

* [Index as a key is an anti-pattern](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)

### Refactoring Modules

* [解构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

## 表单

```jsx
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note =>
              <Note key={note.id} note={note}/>
          )}
        </ul>
        <form onSubmit={addNote}>
          <input/>
          <button type="submit">save</button>
        </form>
      </div>
  )
}
```

``event.preventDefault()``方法，防止提交表单的默认动作

* [Handling Events](https://reactjs.org/docs/handling-events.html)
* [HTMLFormElement: submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)

### Controlled component

* [受控组件](https://reactjs.org/docs/forms.html#controlled-components)

```jsx
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
      'a new note...'
  )

  // ...

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note =>
              <Note key={note.id} note={note}/>
          )}
        </ul>
        <form onSubmit={addNote}>
          <input
              value={newNote}
              onChange={handleNoteChange}
          />
          <button type="submit">save</button>
        </form>
      </div>
  )
}
```

```jsx
const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5,
    id: notes.length + 1,
  }

  setNotes(notes.concat(noteObject))
  setNewNote('')
}
```

``notes.concat(noteObject)``该方法并不改变原始的notes数组，而是创建一个新的数组副本，将新的项目添加到最后。
这很重要，因为在React中我们必须[永远不要直接改变状态](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)!

### Filtering Displayed Elements


