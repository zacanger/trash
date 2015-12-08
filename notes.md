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

--------

## Notes on Mongo schema design

#### (in a one-to-n sort of situation...)
	- Embed N if low cardinality & don't need to access embedded N standalone (outside parent object's context) (array of documents)
	- Array of refs to N objects if cardinality is one-to-many, or if N objects should need to stand alone (array of refs)
	- Ref to One from the N objects if cardinality is very high (parent ref in the N-side document)

#### the six rules of thumb, according to mongodb:
	1. favour embedding unless there is a compelling reason not to
	1. needing to access an object on its own is a compelling reason
	1. arrays should not grow. more than a couple hundred on the 'many' side, don't embed. if there are more than a couple thousand, don't use an array of objectid refs.
	1. don't fear application-level joins.
	1. keep r/w ratio in mind when denormalizing. mostly read is a good candidate. frequently updated means it's not worth it.
	1. structure your models around how you will access data. how the app queries and updates are very important here.

--------

Type _introspection_ is a feature of languages where, at runtime (which, for the sake of keeping it in my head, we'll say is when said language goes from source to not-source, whether that's a binary or a browser window, or whatever... Java bytecode doesn't count, because Java is an ancient zombie, and I'm not even sure where it falls on the range of 'scripting' to 'compiled,' since it actually kind of is dumb as fuck), a program can take a peek inside and see what the _type_ of an _object_ is.

So:
```ruby
A=Class.new
B=Class.new A
a=A.new
b=B.new
a.instance_of? A
=> true
b.instance_of? A
=> false
b.kind_of? A
=> true

```
```php
if ($obj instanceof Cat) {
	// hey look, it's a cat!
}
```
```python
thingy = whatever(100)
blingy = blahhh(17)
type(thingy)
<type 'whatever'>
isinstance(thingy, type(whatever))
True
isinstance(thingy, type(blingy))
False
```
Python also has `hasattr`, which is nifty.

--------

## Cron in Node

`node-schedule` seems quite popular. It's a 'cron-like' and 'not-cron-like' scheduler. I believe that means it's a scheduler, but it's time based instead of interval based (because `setInterval` exists). Node-schedule is for in-process scheduling, so once your script has executed, it's gone (and then cron makes a lot more sense, because otherwise you'd have to write a script just to start node-schedule to do whatever it is that you need done at whatever time and/or date).

--------

Gulp:
```javascript
gulp.task('nameoftaskNOSPACES', ['arraywithTasksToExecute', 'beforeThisTaskHappens', 'whichAreOptionalReally'], function(){})

```

