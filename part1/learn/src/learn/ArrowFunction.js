const arrowFunction = () => {
  // about arrow function expressions
  const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  console.log(materials.map(material => material.length));

  // This will return the object {foo: "a}
  const testReturn = (params) => ({foo: params.name})
  console.log(testReturn({name: "王浩哲"}))

  const testRestParam = (a, b, ...rest) => (
      {a, b, rest}
  )
  console.log("test rest parameters", testRestParam(1, 2, 3, 4, 5))

  const testDefaultParameters = (c, a = 400, b = 20) => ({a, b, c})
  console.log("test default parameters", testDefaultParameters(1))

  let testDestructuring = ([a, b] = [10, 20]) => a + b  // result is 30
  console.log("test destructuring 1", testDestructuring())
  testDestructuring = ({a, b} = {a: 10, b: 20}) => a + b // result is 30
  console.log("test destructuring 2", testDestructuring())

  const obj = {
    // does not create a new scope
    i: 10,
    b: () => console.log("b", obj.i, obj),
    c() {
      console.log("c", obj.i, obj)
    }
  }
  obj.b() // prints undefined, Window { /* … */ } (or the global object)
  obj.c() // prints 10, Object { /* … */ }

  const obj2 = {
    a: 10
  }
  // can't use this,this.a
  Object.defineProperty(obj2, 'b', {
    get: () => {
      console.log(obj2.a, typeof obj2.a, obj2) // undefined 'undefined' Window { /* … */ } (or the global object)
      return obj2.a + 10 // represents global object 'Window', therefore 'this.a' returns 'undefined'
    }
  })
  console.log(obj2.b)

  class C {
    a = 1
    autoBoundMethod = () => {
      console.log(this.a)
    }
  }

  const c = new C()
  c.autoBoundMethod() // 1
  const {autoBoundMethod} = c;
  autoBoundMethod(); // 1

  traditionalExample()
  arrowExample()
}

const traditionalExample = () => {
  // ----------------------
  // Traditional Example
  // ----------------------
  // A simplistic object with its very own "this".
  let obj = {
    num: 100
  }

  // Setting "num" on window to show how it is NOT used
  window.num = 2022

  // A simple traditional function to operate on "this"
  const add = function (a, b, c) {
    return this.num + a + b + c;
  }

  // call
  const resultCall = add.call(obj, 1, 2, 3) // establishing the scope as "obj"
  console.log(resultCall) // result 106

  // apply
  const arr = [1, 2, 3]
  const resultApply = add.apply(obj, arr) //establishing the scope as "obj"
  console.log(resultApply) // result 106

  // bind
  const resultBind = add.bind(obj) // establishing the scope as "obj"
  console.log(resultBind(1, 2, 3)) // result 106

  obj = {
    count: 10,
    doSomethingLater() {
      setTimeout(function () { // the function executes on the window scope
        this.count++
        console.log(this.count)
      }, 300)
    },
  }
  obj.doSomethingLater() // console prints "NaN", because the property "count" is not in the window scope
}


function arrowExample() {

  // A simplistic object with its very own "this".
  let obj = {
    num: 100,
  };

  // Setting "num" on window to show how it gets picked up.
  window.num = 2020; // yikes!

  // Arrow Function (but in this function can't use this)
  const add = (a, b, c) => console.log(this, a, b, c)

  // call not work for this
  add.call(obj, 1, 2, 3)
  add.apply(obj, [1, 2, 3])
  const bound = add.bind(obj);
  bound(1, 2, 3);

  obj = {
    count: 10,
    doSomethingLater() {
      // The traditional function binds "this" to the "obj" context.
      setTimeout(() => {
        // Since the arrow function doesn't have its own binding and
        // setTimeout (as a function call) doesn't create a binding
        // itself, the "obj" context of the traditional function will
        // be used within.
        this.count++
        console.log(this.count)
      }, 300)
    }
  }
  obj.doSomethingLater()
}

export default arrowFunction
