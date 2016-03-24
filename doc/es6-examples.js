// index.js:
// var register = require('babel-core/register')
// register({
//   presets: ["es2015"]
// })
// require('./examples')

/*
  const and let
*/

// if (true) {
//   var thing = 'woo'
// }
//
// console.log(thing) // 'woo'
//
// if (true) {
//   let foo = 'bar'
// }
//
// console.log(foo) // undefined
//

// let funcArray = []
//
// for (let i = 0; i < 10; i++) {
//   funcArray.push(function() {
//     console.log(i)
//   })
// }
//
// funcArray[5]()


// const foo = []
//
// console.log(foo)
//
// foo.push('stuff', 21)
//
// console.log(foo)


// const foo = () => console.log('wooo!')
//
// foo()

// setInterval(() => {
//   console.log('woo')
//   return 'value'
// }, 1000)
//
// setInterval(function () {
//   return console.log('woo')
// }, 1000)

// const myFunc = () => console.log('woo')

// const anotherFunc = () => {
//   return console.log('woo')
// }

// const add = (a, b) => a + b

// const add = (a, b) => { // Same as above ^
//   return a + b
// }

// const logSomething = thing => console.log('Thing: ' + thing)
//
// logSomething(add(2,3))

/* Template Strings */

// "" '' ``

// `This is a multi-line
//
// String`
//
//
// const name = 'Jacob'
// const thing = 100
//
// const sayHello = (name) => console.log(`Hello, ${name}`)
//
// sayHello(name)


/* Object Literal Enhancements */

// const someVariable = 'name'
// Old, lame way
// const myObject = {
//   someMethod: function(){
//     console.log('I\'m laaaame')
//   }
// }
// myObject[someVariable] = 'test'
//
// // New, hip way
// const myObject = {
//   [someVariable]: 'test',
//   someMethod() {
//     console.log(`I'm hiiiip`)
//   },
//   staticKey: 'test'
// }

// Old lame way
// function personFactory(name, age, hairColor){
//   return {
//     name: name,
//     age: age,
//     hairColor: hairColor
//   }
// }
//
// // New hip way
// function personFactory(name, age, hairColor) {
//   return { name, age, hairColor }
// }

// const myObject = {
//   foo: () => console.log('wooo!'), // Works!
//   bar() => console.log('hoo!') //  Doesn't work!!
// }
//
// myObject.foo()

/* destructuring */

// const myObject = {
//   a: 'test',
//   b: 'bar',
//   c: 21
// }
//
// const { c, a } = myObject

// c === 21
// a === 'test'




/////////////////////////////////////////////////////////////

//In javascript es5, this is illegal because the new line \n is a line feed.
// var str =
// "I am a
// programmer ";
// To make it work, each new line has to be concatenated.
// var str =
// "I am a " +
// "programmer ";
// Template string is a new feature introduced in es6 what allows the use of string interpolation.
// The snippet below declares a person object with name, career and location properties.
// The values of these properties can be directly referenced by putting it in between a pair of curl
// brackets with the dollar sign at the beginning. The entire sentence or the string you want to
// compose has to be wrapped in a pair of backticks, the key is usually the same key for tilde, which
// is located on the top left corner under the esc key on the keyboard.

// let person = {
    // "name" : "Amy",
    // "career": "Model",
    // "location": "New York"
// };
// let sentence =
// `
// Hi, my name is ${person.name}.
// I am a ${person.career} living in ${person.location}.
// `
// console.log(sentence);
// Hi, my name is Amy.
// I am a Model living in New York


// es5 functions
// var fs = require("fs");
// function add(x, y) {
//     return x + y;
// }
// var nums = [1,2,3,4,5];
// var newNums = nums.map(function(n){return n*2});
// console.log(add(3,10));
// console.log(nums, newNums);
// fs.readFile("./arrow_functions.js", "utf-8", function (err, data) {
//     if (err) console.log(err);
//     console.log(data);
// });
//
// Equivalent functions written in es6 with arrow notation. It’s basically replacing the keyword function with the arrow =>
// let fs = require("fs");
// let add  = (x, y) => {return x + y;}
// let nums = [1,2,3,4,5];
// let newNums = nums.map(
//     (n) => {return n*2}
//     );
// console.log(add(3,10));
// console.log(nums, newNums);
// fs.readFile("./arrow_functions.js", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
// });




// Official description of generators:
// Generators are functions which can be exited and later re-entered. Their context (variable bindings)
// will be saved across re-entrances.
// Calling a generator function does not execute its body immediately; an iterator object for the function is returned
// instead. When the iterator’s next() method is called, the generator function’s body is executed until the first
// yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another
// generator function. The next() method returns an object with a value property containing the yielded value and a done
// property which indicates whether the generator has yielded its last value.
//
// Generator examples:
// // simple generator function
// function* simpleGeneratorFunc() {
//     yield 1;
//     yield 2;
//     return "finished";
// }
// let gen = simpleGeneratorFunc();
// console.log(gen.next());    // { value: 1, done: false }
// console.log(gen.next());    // { value: 2, done: false }
// console.log(gen.next());    // { value: 'finished', done: true }
//
//
// // calling generator function inside a generator function
// function* callGeneratorInGenerator() {
//     yield 'a';
//     yield* simpleGeneratorFunc();
//     yield 'b';
// }
// gen = callGeneratorInGenerator();
// console.log(gen.next());    // { value: 'a', done: false }
// console.log(gen.next());    // { value: 1, done: false }
// console.log(gen.next());    // { value: 2, done: false }
// console.log(gen.next());    // { value: 'b', done: false }
// console.log(gen.next());    // { value: undefined, done: true }
//
// // ways of iterating through all the yields in the generator function
//
// // while loop
// gen = simpleGeneratorFunc();
// let item = {"done":false};
// while(!item.done) {
//     item = gen.next();
//     console.log(item);
// }
// // { value: 1, done: false }
// // { value: 2, done: false }
// // { value: 'finished', done: true }
//
//
// // for of
// for (let g of simpleGeneratorFunc()) {
//     console.log(g);
// }
// //1
// //2
//
// // the three dots spread operator ...
// let arr = [...simpleGeneratorFunc()];
// console.log(arr); // [1, 2]
//
// // destructuring
// let [a, b] = simpleGeneratorFunc();
// console.log(a); // 1
// console.log(b); // 2
//
//
//
// In node.js, input and output operations are asynchronous or non-blocking I/O. It allows other operations to continue
// before the I/O transmission are finished. For example, when it encounters a file read operation, it will not wait
// for the file reading operation to finish, but instead it will jump to the next line of code and go on it’s execution.
// This causes the results of the I/O operation to be out of order. There are ways of to control the order, such as
// nested callback function, async libraries, promise libraries and generator function. Generator function is a new
// feature in es6, the snippet below is an example of using generator function to make sure the asynchronous functions
// to run in the order it is written in the code.
// // synchronous timeout function
// // genAsync is a generator object in global scope
// // genAsync.next in this function keeps the tasks to run till completed
// function timeoutFunc(order) {
//     var random = Math.random();
//     setTimeout(function(){
//         genAsync.next(random + order);
//     }, random * 3000);
// }
//
// // The generator function runing the asynchronous function in series, one after another
// function* runTimeoutFuncAsync() {
//     var random1 = yield timeoutFunc(1); console.log(random1);
//     var random2 = yield timeoutFunc(2); console.log(random2);
//     var random3 = yield timeoutFunc(3); console.log(random3);
// }
// var genAsync = runTimeoutFuncAsync();
// genAsync.next(); // kick off the tasks
