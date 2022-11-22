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
  const { notes } = props

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
  const { notes } = props

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
