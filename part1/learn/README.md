# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## React 简介

### Component

* [React 组建](https://reactjs.org/docs/components-and-props.html)
* [箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [ECMAScript 6](http://es6-features.org/#Constants)

### JSX

* [JSX](https://reactjs.org/docs/introducing-jsx.html)

虽然编写JSX是标准的HTML，但我们实际是在处理一种写JavaScript的方式。底层上，由React组件返回的JSX编译成JavaScript。

```jsx
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
      <div>
        <p>Hello world, it is {now.toString()}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
      </div>
  )
}
```

```jsx
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
      'div',
      null,
      React.createElement(
          'p', null, 'Hello world, it is ', now.toString()
      ),
      React.createElement(
          'p', null, a, ' plus ', b, ' is ', a + b
      )
  )
}
```

编译是由[Babel](https://babeljs.io/repl/)处理

JSX的理念类似Java Spring一起使用的Thymeleaf

*JSX是"XML-like"语言，HTML虽然可以``<br>``，但JSX必须``<br />``*

### Multiple components

```jsx
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
    </div>
  )
}
```

```jsx
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}
```

### props: passing data to components

React 的组件可以通过所谓的[props](https://reactjs.org/docs/components-and-props.html)传递数据

```jsx
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}
```

```jsx
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" />
      <Hello name="Daisy" />
    </div>
  )
}
```

```jsx
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
```

**React组件名称必须大写并且React组件的内容（通常）需要包含一个根元素。**
**使用根元素并不是唯一可行的选择。一个组件的array也是一个有效的解决方案。**

```jsx
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name="Maya" age={26 + 10} />,
    <Footer />
  ]
}
```

定义根元素时，这样返回一个数组不是一个特别明智的做法，它会让代码变得难看。

由于根元素被强制规定了，我们DOM树中有"额外的"div-elements。这可以通过使用
[fragments](https://reactjs.org/docs/fragments.html#short-syntax)来避免

```jsx
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}
```
