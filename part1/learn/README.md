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

## JavaScript

JavaScript标准的官方名称是[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)

因为JS更新很快，导致浏览器还不支持很多JS的新功能，也因为这个事实，浏览器运行的都是从新版本的js转成较旧更兼容的版本。

如今流行使用[Babel](https://babeljs.io/)进行转码

[Node.js](https://nodejs.org/en/)是一个基于[Google's Chrome V8JavaScript](https://v8.dev/)引擎的JS运行环境

可以通过 ``node name of file.js`` 的命令来执行js代码文件

[Chrome浏览器的最新版本可以很好地处理JavaScript的新功能](http://kangax.github.io/compat-table/es2016plus/)，
而不许哟啊转写代码。也可以使用[JS Bin](https://jsbin.com/?js,console)这样的工具

### Variables

[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)实际并没有定义一个变量，而是一个常量，其值不能再被改变。

[let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)定义了一个普通变量

在JS中也可以使用关键字[var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)定义变量,
很长时间 var 都是唯一定义变量的方法，const和let是ES6才加入。var的工作方式有所不同，更多的可以参见[JavaScript变量--你应该使用let、var还是const? on Medium](https://medium.com/podiihq/javascript-variables-should-you-use-let-var-or-const-394f7645c88f),
或[关键词：var vs. let on JS Tips](https://www.jstips.co/en/javascript/keyword-var-vs-let/)。
使用var是不明智的，你应该坚持使用const和let！

你也可以在Youtube上找到更多关于这个主题的信息--例如 [var, let and const - ES6 JavaScript Features](https://www.youtube.com/watch?v=sjyJBL5fkp8)

### [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

当一个数组被定义为const，也是可以修改其内容。因为数组是一个对象，而变量始终指向同一个对象。

forEach为数组中的每个项调用函数，总是传递单个项作为参数。作为forEach参数的函数也可以接收[其他参数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

React经常使用函数式编程技术，函数式编程范式的一个特点就是使用[不可变的](https://en.wikipedia.org/wiki/Immutable_object)数据结构

在React代码中，最好使用[concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)方法，该方法不会将项目添加到数组中，而是创建一个新的数组，其中同时包含旧数组和新项目的内容。

```jsx
const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
```

数组定义了很多有用的方法，[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)就是其中之一

```jsx
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
```

在[解构赋值](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)的帮助下，数组中的单个项目很容易被赋值给变量

```jsx
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed
```

### Objects

* [对象字面量](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)

```jsx
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])    // 35 is printed

object1.address = 'Helsinki'
object1['secret number'] = 12341
```

### Functions

```jsx
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const result = sum(1, 5)
console.log(result)

const square = p => {
  console.log(p)
  return p * p
}

const square2 = p => p * p

const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared is now [1, 4, 9]

function product(a, b) {
  return a * b
}

// 函数声明 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
const result = product(2, 6)
// result is now 12

// 函数表达式 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)
// result is now 3.5
```

### Object methods and "this"

* [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

```jsx
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed
```

```jsx
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.growOlder = function() {
  this.age += 1
}

console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed
```

```jsx
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function(a, b) {
    console.log(a + b)
  },
}

arto.doAddition(1, 4)        // 5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // 25 is printed

arto.greet()       // "hello, my name is Arto Hellas" gets printed

const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
```

* [全局对象](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)
* [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

```jsx
const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

// 会导致this消失
setTimeout(arto.greet, 1000)
```

*JavaScript中this的值是根据方法被调用的方式来定义的。当setTimeout在调用方法时，是JavaScript引擎在实际调用方法，此时，this是指全局对象。*

* [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

```jsx
// 可以保留原来的this
setTimeout(arto.greet.bind(arto), 1000)
```

**使用箭头函数可以解决一些与this有关的问题。然而，它们不应该被用作对象的方法，因为那样的话this就完全不起作用了。**

* [egghead.io](https://egghead.io/)的[深入了解JavaScript's this keyword](https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth)

### Classes

* [类](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

```jsx
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()
```

* JavaScript's [prototypal inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
* JavaScript基本上只定义了[Boolean, Null, Undefined, Number, String, Symbol, BigInt, and Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

*类语法的引入是一个有争议的补充*

* [Not Awesome: ES6 Classes](https://github.com/petsel/not-awesome-es6-classes)
* [Is "Class" In ES6 The New "Bad" Part? on Medium](https://rajaraodv.medium.com/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65)

ES6类的语法在 "老 "React和Node.js中用得很多,而在React的新的[Hooks](https://reactjs.org/docs/hooks-intro.html)功能下，Js类语法没有具体的使用

### JavaScript materials

* [Mozilla's JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* 强烈建议先阅读一遍[JavaScript再认识（JS教程）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview)
* [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
* [javascript.info](https://javascript.info/)
