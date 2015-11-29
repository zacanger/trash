can pass arguments to console.log and console.error that will be passed to util.format()  
so %s for strings, %d for numbers, and %j for objects are valid

console.trace(label)  
console.time(label) and console.timeEnd(label)  
console.assert(expression, arguments)  
console.dir(object)  

--------

Don't use Mongoose. Mongoose actually does have all the problems I thought it had. Try Mongolayer at least once. https://github.com/simpleviewinc/mongolayer `npm i --save mongolayer`

Recursive populates, create vs insert fixed, find/create and save using different syntax fixed, and each document only having the fields added to it, rather than being a whole new instance of the schema fixed. Records getting default values instead of not filling that field fixed. Plus other things.

--------

Generators DO look just like infinite loops. I'm not wrong. Turns out that's because they are infinite loops, but that's okay, because they're basically kind of backgrounded until called. You hit it up with an iterator, get what you need, and then it goes back to sleep. So, in a way, maybe that's kind of like a builtin thing that you'd imagine needs to be an infinite loop, but isn't in the way because you only poke it when you need it. (Like Math.random(), kinda?) That's my interpretation, anyway.

