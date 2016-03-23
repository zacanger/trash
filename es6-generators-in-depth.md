[Source](http://www.2ality.com/2015/03/es6-generators.html "Permalink to ES6 generators in depth")

# ES6 generators in depth

This blog post is part of a series on iteration in ES6:

1. [Iterables and iterators in ECMAScript 6][1]
2. [ES6 generators in depth][2]

* * *

Generators, a new feature of ECMAScript 6 [4], are functions that can be paused and resumed. This helps with many applications: iterators, asynchronous programming, etc. This blog post explains how generators work and gives an overview of their applications.

The following GitHub repository contains the example code: [generator-examples][3]

### Overview

Two important applications of generators are:

* Implementing iterables
* Blocking on asynchronous function calls

The following subsections give brief overviews of these applications, more thorough explanations are provided later (plus discussions of other topics).

#### Implementing iterables via generators

The following function returns an iterable over the properties of an object, one [`key,value]` pair per property:

        // The asterisk after `function` means that
        // `objectEntries` is a generator
        function* objectEntries(obj) {
            let propKeys = Reflect.ownKeys(obj);

            for (let propKey of propKeys) {
                // `yield` returns a value and then pauses
                // the generator. Later, execution continues
                // where it was previously paused.
                yield [propKey, obj[propKey]];
            }
        }

How exactly `objectEntries()` works is explained later. It is used like this:

        let jane = { first: 'Jane', last: 'Doe' };
        for (let [key,value] of objectEntries(jane)) {
            console.log(`${key}: ${value}`);
        }
        // Output:
        // first: Jane
        // last: Doe

#### Blocking on asynchronous function calls

In the following code, I use [the control flow library co][4] to asynchronously retrieve two JSON files. Note how, in line (A), execution blocks (waits) until the result of `Promise.all()` is ready. That means that the code looks synchronous while performing asynchronous operations.

        co(function* () {
            try {
                let [croftStr, bondStr] = yield Promise.all([  // (A)
                    getFile('http://localhost:8000/croft.json'),
                    getFile('http://localhost:8000/bond.json'),
                ]);
                let croftJson = JSON.parse(croftStr);
                let bondJson = JSON.parse(bondStr);

                console.log(croftJson);
                console.log(bondJson);
            } catch (e) {
                console.log('Failure to read: ' + e);
            }
        });

`getFile(url)` retrieves the file pointed to by `url`. Its implementation is shown later. I'll also explain how `co` works.

### What are generators?

_Generators_ are functions that can be paused and resumed, which enables a variety of applications.

As a first example, consider the following generator function whose name is `genFunc`:

        function* genFunc() {
            console.log('First');
            yield; // (A)
            console.log('Second'); // (B)
        }

Two things distinguish `genFunc` from a normal function declaration:

* It starts with the "keyword" `function*`.
* It is paused in the middle via `yield`.

Calling `genFunc` does not execute it. Instead, it returns a so-called _generator object_ that lets us control `genFunc`'s execution:

        > let genObj = genFunc();

`genFunc()` is initially suspended at the beginning of its body. The method `genObj.next()` continues the execution of `genFunc`, until the next `yield`:

        > genObj.next()
        First
        { value: undefined, done: false }

As you can see in the last line, `genObj.next()` also returns an object. Let's ignore that for now. It will matter once we look at generators as iterators.

`genFunc` is now paused in line (A). If we call `next()` again, execution resumes and line (B) is executed:

        > genObj.next()
        Second
        { value: undefined, done: true }

Afterwards, the function is finished, execution has left the body and further calls of `genObj.next()` have no effect.

#### Ways of creating generators

There are four ways in which you can create generators:

1. Via a generator function declaration:

            function* genFunc() { ··· }
        let genObj = genFunc();

2. Via a generator function expression:

            const genFunc = function* () { ··· };
        let genObj = genFunc();

3. Via a generator method definition in an object literal:

            let obj = {
            * generatorMethod() {
                ···
            }
        };
        let genObj = obj.generatorMethod();

4. Via a generator method definition in a class definition (which can be a class declaration or a class expression [11]):

            class MyClass {
            * generatorMethod() {
                ···
            }
        }
        let myInst = new MyClass();
        let genObj = myInst.generatorMethod();

#### Roles played by generators

Generators can play three roles:

1. Iterators (data producers): Each `yield` can return a value via `next()`, which means that generators can produce sequences of values via loops and recursion. Due to generator objects implementing the interface `Iterable` [5], these sequences can be processed by any ECMAScript 6 construct that supports iterables. Two examples are: `for-of` loops and the spread operator (`...`).

2. Observers (data consumers): `yield` can also receive a value from `next()` (via a parameter). That means that generators become data consumers that pause until a new value is pushed into them via `next()`.

3. Coroutines (data producers and consumers): Given that generators are pausable and can be both data producers and data consumers, not much work is needed to turn them into coroutines (cooperatively multitasked tasks).

The next sections provide deeper explanations of these roles.

### Generators as iterators (data production)

As explained before, generator objects can be data producers, data consumers or both. This section looks at them as data producers, where they implement both the interfaces `Iterable` and `Iterator` (shown below). Note that that means that the result of a generator function is both an iterable and an iterator. The full interface of generator objects will be shown later.

        interface Iterable {
            [Symbol.iterator]() : Iterator;
        }
        interface Iterator {
            next() : IteratorResult;
            return?(value? : any) : IteratorResult;
        }
        interface IteratorResult {
            value : any;
            done : boolean;
        }

A generator function produces a sequence of values via `yield`, a data consumer consumes thoses values via the iterator method `next()`. For example, the following generator function produces the values `'a'` and `'b'`:

        function* genFunc() {
            yield 'a';
            yield 'b';
        }

This interaction shows how to retrieve the yielded values via the generator object `genObj`:

        > let genObj = genFunc();
        > genObj.next()
        { value: 'a', done: false }
        > genObj.next()
        { value: 'b', done: false }
        > genObj.next() // end of sequence reached
        ( value: undefined, done: true }

#### Ways of iterating over a generator

As generator objects are iterable, ES6 language constructs that support iterables can be applied to them. The following three ones are especially important.

First, the `for-of` loop:

        for (let x of genFunc()) {
            console.log(x);
        }
        // Output:
        // a
        // b

Second, the spread operator (`...`), which turns iterated sequences into elements of an array (consult [7] for more information on this operator):

        let arr = [...genFunc()]; // ['a', 'b']

Third, destructuring [6]:

        > let [x, y] = genFunc();
        > x
        'a'
        > y
        'b'

#### Returning from a generator

The previous generator function did not contain an explicit `return`. An implicit `return` is equivalent to returning `undefined`. Let's examine a generator with an explicit `return`:

        function* genFuncWithReturn() {
            yield 'a';
            yield 'b';
            return 'result';
        }

The returned value shows up in the last object returned by `next()`, whose property `done` is `true`:

        > let genObjWithReturn = genFuncWithReturn();
        > genObjWithReturn.next()
        { value: 'a', done: false }
        > genObjWithReturn.next()
        { value: 'b', done: false }
        > genObjWithReturn.next()
        { value: 'result', done: true }

However, most constructs that work with iterables ignore the value inside the `done` object:

        for (let x of genFuncWithReturn()) {
            console.log(x);
        }
        // Output:
        // a
        // b

        let arr = [...genFuncWithReturn()]; // ['a', 'b']

`yield*`, an operator for making recursive generator calls, does consider values inside `done` objects. It is explained later.

#### Example: iterating over properties

Let's look at an example that demonstrates how convenient generators are for implementing iterables. The following function, `objectEntries()`, returns an iterable over the properties of an object:

        function* objectEntries(obj) {
            // In ES6, you can use strings or symbols as property keys,
            // Reflect.ownKeys() retrieves both
            let propKeys = Reflect.ownKeys(obj);

            for (let propKey of propKeys) {
                yield [propKey, obj[propKey]];
            }
        }

This function enables you to iterate over the properties of an object `jane` via the `for-of` loop:

        let jane = { first: 'Jane', last: 'Doe' };
        for (let [key,value] of objectEntries(jane)) {
            console.log(`${key}: ${value}`);
        }
        // Output:
        // first: Jane
        // last: Doe

For comparison – an implementation of `objectEntries()` that doesn't use generators is much more complicated:

        function objectEntries(obj) {
            let index = 0;
            let propKeys = Reflect.ownKeys(obj);

            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    if (index < propKeys.length) {
                        let key = propKeys[index];
                        index++;
                        return { value: [key, obj[key]] };
                    } else {
                        return { done: true };
                    }
                }
            };
        }

#### Recursion via `yield*` (for output)

The `yield*` operator lets you call another generator from within a generator, as if you made a function call. For now, I only explain how this works if both generators produce output, I'll later explain how things work if input is involved.

How can one generator recursively call another generator? Let's assume you have written a generator function `foo`:

        function* foo() {
            yield 'a';
            yield 'b';
        }

How would you call `foo` from another generator function `bar`? The following approach does not work!

        function* bar() {
            yield 'x';
            foo(); // does nothing!
            yield 'y';
        }

Calling `foo()` returns an object, but does not actually execute `foo()`. That's why ECMAScript 6 has the operator `yield*` for making recursive generator calls:

        function* bar() {
            yield 'x';
            yield* foo();
            yield 'y';
        }

        // Collect all values yielded by bar() in an array
        let arr = [...bar()];
            // ['x', 'a', 'b', 'y']

Internally, `yield*` works roughly as follows:

        function* bar() {
            yield 'x';
            for (let value of foo()) {
                yield value;
            }
            yield 'y';
        }

The operand of `yield*` does not have to be a generator object, it can be any iterable:

        function* bla() {
            yield 'sequence';
            yield* ['of', 'yielded'];
            yield 'values';
        }

        let arr = [...bla()];
            // ['sequence', 'of', 'yielded', 'values']

##### `yield*` considers end-of-iteration values

Most constructs that support iterables ignore the value included in the end-of-iteration object (whose property `done` is `true`). Generators provide that value via `return`. The result of `yield*` is the end-of-iteration value:

        function* genFuncWithReturn() {
            yield 'a';
            yield 'b';
            return 'The result';
        }
        function* logReturned(genObj) {
            let result = yield* genObj;
            console.log(result); // (A)
        }

If we want to get to line (A), we first must iterate over all values yielded by `logReturned()`:

        > [...logReturned(genFuncWithReturn())]
        The result
        [ 'a', 'b' ]

##### Iterating over trees

Iterating over a tree with recursion is simple, writing an iterator for a tree with traditional means is complicated. That's why generators shine here: they let you implement an iterator via recursion. As an example, consider the following data structure for binary trees. It is iterable, because it has a method whose key is `Symbol.iterator`. That method is a generator method and returns an iterator when called.

        class BinaryTree {
            constructor(value, left=null, right=null) {
                this.value = value;
                this.left = left;
                this.right = right;
            }

            /** Prefix iteration */
            * [Symbol.iterator]() {
                yield this.value;
                if (this.left) {
                    yield* this.left;
                }
                if (this.right) {
                    yield* this.right;
                }
            }
        }

The following code creates a binary tree and iterates over it via `for-of`:

        let tree = new BinaryTree('a',
            new BinaryTree('b',
                new BinaryTree('c'),
                new BinaryTree('d')),
            new BinaryTree('e'));

        for (let x of tree) {
            console.log(x);
        }
        // Output:
        // a
        // b
        // c
        // d
        // e

#### You can only `yield` in generators

A significant limitation of generators is that you can only yield while you are (statically) inside a generator function. That is, yielding in callbacks doesn't work:

        function* genFunc() {
            ['a', 'b'].forEach(x => yield x); // SyntaxError
        }

`yield` is not allowed inside non-generator functions, which is why the previous code causes a syntax error. In this case, it is easy to rewrite the code so that it doesn't use callbacks (as shown below). But unfortunately that isn't always possibe.

        function* genFunc() {
            for (let x of ['a', 'b']) {
                yield x; // OK
            }
        }

The upsides of this limitation are explained later: they make generators easier to implement and compatible with event loops.

### Generators as observers (data consumption)

As consumers of data, generator objects conform to the second half of the generator interface, `Observer`:

        interface Observer {
            next(value? : any) : void;
            return(value? : any) : void;
            throw(error) : void;
        }

As an observer, a generator pauses until it receives input. There are three kinds of input, transmitted via the methods specified by the interface:

* `next()` sends normal input.
* `return()` terminates the generator.
* `throw()` signals an error.

#### Sending values via `next()`

If you use a generator as an observer, you send values to it via `next()` and it receives those values via `yield`:

        function* dataConsumer() {
            console.log('Started');
            console.log(`1. ${yield}`); // (A)
            console.log(`2. ${yield}`);
            return 'result';
        }

Let's use this generator interactively. First, we create a generator object:

        > let genObj = dataConsumer();

We now call `genObj.next()`, which starts the generator. Execution continues until the first `yield`, which is where the generator pauses. The result of `next()` is the value yielded in line (A) (`undefined`, because `yield` doesn't have an operand). In this section, we are not interested in what `next()` returns, because we only use it to send values, not to retrieve values.

        > genObj.next()
        Started
        { value: undefined, done: false }

We call `next()` two more times, in order to send the value `'a'` to the first `yield` and the value `'b'` to the second `yield`:

        > genObj.next('a')
        1. a
        { value: undefined, done: false }

        > genObj.next('b')
        2. b
        { value: 'result', done: true }

The result of the last `next()` is the value returned from `dataConsumer()`. `done` being `true` indicates that the generator is finished.

Unfortunately, `next()` is asymmetric, but that can't be helped: It always sends a value to the currently suspended `yield`, but returns the operand of the following `yield`.

##### The first `next()`

When using a generator as an observer, it is important to note that the only purpose of the first invocation of `next()` is to start the observer. It is only ready for input afterwards, because this first invocation has advanced execution to the first `yield`. Therefore, you can't send input via the first `next()` – you even get an error if you do:

        > function* g() { yield }
        > g().next('hello')
        TypeError: attempt to send 'hello' to newborn generator

The following utility function fixes this issue:

        /**
         * Returns a function that, when called,
         * returns a generator object that is immediately
         * ready for input via `next()`
         */
        function coroutine(generatorFunction) {
            return function (...args) {
                let generatorObject = generatorFunction(...args);
                generatorObject.next();
                return generatorObject;
            };
        }

To see how `coroutine()` works, let's compare a wrapped generator with a normal one:

        const wrapped = coroutine(function* () {
            console.log(`First input: ${yield}`);
            return 'DONE';
        });
        const normal = function* () {
            console.log(`First input: ${yield}`);
            return 'DONE';
        };

The wrapped generator is immediately ready for input:

        > wrapped().next('hello!')
        First input: hello!

The normal generator needs an extra `next()` until it is ready for input:

        > let genObj = normal();
        > genObj.next()
        { value: undefined, done: false }
        > genObj.next('hello!')
        First input: hello!
        { value: 'DONE', done: true }

#### `yield` binds loosely

`yield` binds very loosely, so that we don't have to put its operand in parentheses:

        yield a + b + c;

This is treated as:

        yield (a + b + c);

Not as:

        (yield a) + b + c;

As a consequence, many operators bind more tightly than `yield` and you have to put `yield` in parentheses if you want to use it as an operand. For example, you get a SyntaxError if you make an unparenthesized `yield` an operand of plus:

        console.log('Hello' + yield); // SyntaxError
        console.log('Hello' + yield 123); // SyntaxError

        console.log('Hello' + (yield)); // OK
        console.log('Hello' + (yield 123)); // OK

You do not need parens if `yield` is a direct argument in a function or method call:

        foo(yield 'a', yield 'b');

You also don't need parens if you use `yield` on the right-hand side of an assignment:

        let input = yield;

##### Grammar

The need for parens can be seen in the following grammar rules in the [ECMAScript 6 specification][5]. These rules describe how expressions are parsed. I list them here from general (loose binding, lower precedence) to specific (tight binding, higher precedence). Wherever a certain kind of expression is demanded, you can also use more specific ones. The opposite is not true. The hierarchy ends with `ParenthesizedExpression`, which means that you can mention any expression anywhere, if you put it in parentheses.

        Expression :
            AssignmentExpression
            Expression , AssignmentExpression
        AssignmentExpression :
            ConditionalExpression
            YieldExpression
            ArrowFunction
            LeftHandSideExpression = AssignmentExpression
            LeftHandSideExpression AssignmentOperator AssignmentExpression

        ···

        AdditiveExpression :
            MultiplicativeExpression
            AdditiveExpression + MultiplicativeExpression
            AdditiveExpression - MultiplicativeExpression
        MultiplicativeExpression :
            UnaryExpression
            MultiplicativeExpression MultiplicativeOperator UnaryExpression

        ···

        PrimaryExpression :
            this
            IdentifierReference
            Literal
            ArrayLiteral
            ObjectLiteral
            FunctionExpression
            ClassExpression
            GeneratorExpression
            RegularExpressionLiteral
            TemplateLiteral
            ParenthesizedExpression
        ParenthesizedExpression :
            ( Expression )

The operands of an `AdditiveExpression` are an `AdditiveExpression` and a `MultiplicativeExpression`. Therefore, using a (more specific) `ParenthesizedExpression` as an operand is OK, but using a (more general) `YieldExpression` isn't.

#### `return()` and `throw()`

Let's recap how `next(x)` works (after the first invocation):

1. The generator is currently suspended at a `yield` operator.
2. Send the value `x` to that `yield`, which means that it evaluates to `x`.
3. Proceed to the next `yield` or `return`:
    * `yield x` leads to `next()` returning with `{ value: x, done: false }`
    * `return x` leads to `next()` returning with `{ value: x, done: true }`

`return()` and `throw()` work similarly to `next()`, but they do something different in step 2:

* `return(x)` executes `return x` at the location of `yield`.
* `throw(x)` executes `throw x` at the location of `yield`.

#### `return()` terminates the generator

`return()` performs a `return` at the location of the `yield` that led to the last suspension of the generator. Let's use the following generator function to see how that works.

        function* genFunc1() {
            try {
                console.log('Started');
                yield; // (A)
            } finally {
                console.log('Exiting');
            }
        }

In the following interaction, we first use `next()` to start the generator and to proceed until the `yield` in line (A). Then we return from that location via `return()`.

        > let genObj1 = genFunc1();
        > genObj1.next()
        Started
        { value: undefined, done: false }
        > genObj1.return('Result')
        Exiting
        { value: 'Result', done: true }

##### Preventing termination

You can prevent `return()` from terminating the generator if you yield inside the `finally` clause (using a `return` statement in that clause is also possible):

        function* genFunc2() {
            try {
                console.log('Started');
                yield;
            } finally {
                yield 'Not done, yet!';
            }
        }

This time, `return()` does not exit the generator function. Accordingly, the property `done` of the object it returns is `false`.

        > let genObj2 = genFunc2();

        > genObj2.next()
        Started
        { value: undefined, done: false }

        > genObj2.return('Result')
        { value: 'Not done, yet!', done: false }

You can invoke `next()` one more time. Similarly to non-generator functions, the return value of the generator function is the value that was queued prior to entering the `finally` clause.

        > genObj2.next()
        { value: 'Result', done: true }

##### Returning from a newborn generator

Returning a value from a _newborn_ generator (that hasn't started yet) is allowed:

        > function* genFunc() {}
        > genFunc().return('yes')
        { value: 'yes', done: true }

#### `throw()` signals an error

`throw()` throws an exception at the location of the `yield` that led to the last suspension of the generator. Let's examine how that works via the following generator function.

        function* genFunc1() {
            try {
                console.log('Started');
                yield; // (A)
            } catch (error) {
                console.log('Caught: ' + error);
            }
        }

In the following interaction, we first use `next()` to start the generator and proceed until the `yield` in line (A). Then we throw an exception from that location.

        > let genObj1 = genFunc1();

        > genObj1.next()
        Started
        { value: undefined, done: false }

        > genObj1.throw(new Error('Problem!'))
        Caught: Error: Problem!
        { value: undefined, done: true }

The result of `throw()` (shown in the last line) stems from us leaving the function with an implicit `return`.

##### Uncaught exceptions

If you don't catch the exception inside the generator, it is thrown by `throw()`. For example, the following generator function does not catch exceptions:

        function* genFunc2() {
            console.log('Started');
            yield; // (A)
        }

If we use `throw()` to throw an instance of `Error` at line (A), the method itself throws that error:

        > let genObj2 = genFunc2();
        > genObj2.next()
        Started
        { value: undefined, done: false }
        > genObj2.throw(new Error('Problem!'))
        Error: Problem!

##### Throwing from a newborn generator

Throwing an exception in a _newborn_ generator (that hasn't started yet) is allowed:

        > function* genFunc() {}
        > genFunc().throw(new Error('Problem!'))
        Error: Problem!

#### Example: processing asynchronously pushed data

The fact that generators-as-observers pause while they wait for input makes them perfect for on-demand processing of data that is received asynchronously. The pattern for setting up a chain of generators for processing is as follows:

* First chain member: a normal function that has a parameter `target`, which is the generator object of the next element in the chain of generators. The function makes an asynchronous request and pushes the results to the target via `target.next()`.
* Intermediate chain members: generators that have a parameter `target`. They receive data via `yield` and send data via `target.next()`.
* Last chain member: a generator that has no parameter `target` and only receives data.

As an example, let's chain generators to process a file that is read asynchronously. The code shown in this section is a Node.js script that is executed via `babel-node` [8].

The following code sets up the chain, which starts with the normal function `readFile`, continues with the generators `splitLines` and `numberLines` and ends with the generator `printLines`:

        let fileName = process.argv[2];
        readFile(fileName, chain(splitLines, numberLines, printLines));

I'll explain what these functions do when I show their code. The following helper function sets up a chain of generators: Starting with the last generator, each generator function is called and the resulting generator object is used to start the generator via an initial `next()`. If a generator has a successor, it receives the successor's generator object via the parameter `target`. The result of `chain()` is the generator object of the first generator function (in our example: `splitLines`).

        function chain(...generatorFuncs) {
            if (generatorFuncs.length < 1) {
                throw new Error('Need at least 1 argument');
            }
            let generatorObject = generatorFuncs[generatorFuncs.length-1]();
            generatorObject.next(); // generator is now ready for input
            for (let i=generatorFuncs.length-2; i >= 0; i--) {
                let generatorFunction = generatorFuncs[i];
                // Link current generator to successor
                generatorObject = generatorFunction(generatorObject);
                // Start the generator
                generatorObject.next();
            }
            return generatorObject;
        }

`readFile()` is the non-generator function that starts everything.

        import {createReadStream} from 'fs';

        /**
         * Create an asynchronous ReadStream for the file whose name
         * is `fileName` and feed it to the generator object `target`.
         *
         * @see ReadStream https://nodejs.org/api/fs.html#fs_class_fs_readstream
         */
        function readFile(fileName, target) {
            let readStream = createReadStream(fileName,
                { encoding: 'utf8', bufferSize: 1024 });
            readStream.on('data', buffer => {
                let str = buffer.toString('utf8');
                target.next(str);
            });
            readStream.on('end', () => {
                // Signal end of output sequence
                target.return();
            });
        }

The chain of generators starts with `splitLines`:

        /**
         * Turns a sequence of text chunks into a sequence of lines
         * (where lines are separated by newlines)
         */
        function* splitLines(target) {
            let previous = '';
            try {
                while (true) {
                    previous += yield;
                    let eolIndex;
                    while ((eolIndex = previous.indexOf('n')) >= 0) {
                        let line = previous.slice(0, eolIndex);
                        target.next(line);
                        previous = previous.slice(eolIndex+1);
                    }
                }
            } finally {
                // Handle the end of the input sequence
                // (signaled via `return()`)
                if (previous.length > 0) {
                    target.next(previous);
                }
                // Signal end of output sequence
                target.return();
            }
        }

Note an important pattern:

* `readFile` uses the generator object method `return()` to signal the end of the sequence of chunks that it sends.
* `readFile` sends that signal while `splitLines` is waiting for input via `yield`, inside an infinite loop. `return()` breaks from that loop.
* `splitLines` uses a `finally` clause to handle the end-of-sequence.

The next generator is `numberLines`:

        /**
         * Prefixes numbers to a sequence of lines
         */
        function* numberLines(target) {
            try {
                for (let lineNo = 0; ; lineNo++) {
                    let line = yield;
                    target.next(`${lineNo}: ${line}`);
                }
            } finally {
                // Signal end of output sequence
                target.return();
            }
        }

The last generator is `printLines`:

        /**
         * Receives a sequence of lines (without newlines)
         * and logs them (adding newlines).
         */
        function* printLines() {
            while (true) {
                let line = yield;
                console.log(line);
            }
        }

The neat thing about this code is that everything happens lazily (on demand): lines are split, numbered and printed as they arrive; we don't have to wait for all of the text before we can start printing.

#### `yield*`: the full story

So far, we have only seen one aspect of `yield`: it propagates yielded values from the callee to the caller. Now that we are interested in generators receiving input, another aspect becomes relevant: `yield*` also forwards input received by the caller to the callee.

I'll first explain the complete semantics of `yield*` by showing how you'd implemented it in JavaScript. Then I give simple examples where input received by the caller via `next()`, `return()` and `throw()` is forwarded to the callee.

The following statement:

        let yieldStarResult = yield* calleeFunc();

is roughly equivalent to:

        let yieldStarResult;

        let calleeObj = calleeFunc();
        let prevReceived = undefined;
        while (true) {
            try {
                // Forward input previously received
                let item = calleeObj.next(prevReceived);
                if (item.done) {
                    yieldStarResult = item.value;
                    break;
                }
                prevReceived = yield item.value;
            } catch (e) {
                // Pretend `return` can be caught like an exception
                if (e instanceof Return) {
                    // Forward input received via return()
                    calleeObj.return(e.returnedValue);
                    return e.returnedValue; // "re-throw"
                } else {
                    // Forward input received via throw()
                    calleeObj.throw(e); // may throw
                }
            }
        }

To keep things simple, several things are missing in this code:

* The operand of `yield*` can be any iterable value.
* `return()` and `throw()` are optional iterator methods. We should only call them if they exist.
* If an exception is received and `throw()` does not exist, but `return()` does then `return()` is called (before throwing an exception) to give `calleeObject` the opportunity to clean up.
* `calleeObj` can refuse to close, by returning an object whose property `done` is `false`. Then the caller also has to refuse to close and `yield*` must continue to iterate.

##### Example: `yield*` forwards `next()`

The following generator function `caller()` invokes the generator function `callee()` via `yield*`.

        function* callee() {
            console.log('callee: ' + (yield));
        }
        function* caller() {
            while (true) {
                yield* callee();
            }
        }

`callee` logs values received via `next()`, which allows us to check whether it receives the value `'a'` and `'b'` that we send to `caller`.

        > let callerObj = caller();

        > callerObj.next() // start
        { value: undefined, done: false }

        > callerObj.next('a')
        callee: a
        { value: undefined, done: false }

        > callerObj.next('b')
        callee: b
        { value: undefined, done: false }

##### Example: `yield*` forwards `throw()`

Let's use the following code to demonstrate how `throw()` works while `yield*` is delegating to another generator.

        function* callee() {
            try {
                yield 'b'; // (A)
                yield 'c';
            } finally {
                console.log('finally callee');
            }
        }
        function* caller() {
            try {
                yield 'a';
                yield* callee();
                yield 'd';
            } catch (e) {
                console.log('[caller] ' + e);
            }
        }

We first create a generator object and advance until line (A).

        > let genObj = caller();

        > genObj.next().value
        'a'
        > genObj.next().value
        'b'

In that line, we throw an exception:

        > genObj.throw(new Error('Problem!'))
        finally callee
        [caller] Error: Problem!
        { value: undefined, done: true }

`callee` doesn't catch the exception, which is why it is propagated into `caller`, where it is logged before `caller` finishes.

##### Example: `yield*` forwards `return()`

Let's use the following code to demonstrate how `return()` works while `yield*` is delegating to another generator.

        function* callee() {
            try {
                yield 'b';
                yield 'c';
            } finally {
                console.log('finally callee');
            }
        }
        function* caller() {
            try {
                yield 'a';
                yield* callee();
                yield 'd';
            } finally {
                console.log('finally caller');
            }
        }

Destructuring closes an iterator via `return()` if one doesn't iterate until the end:

        let [x, y] = caller(); // ['a', 'b']

        // Output:
        // finally callee
        // finally caller

Interestingly, the `return()` is sent to `caller` and forwarded to `callee` (which it terminates early), but then also terminates `caller` (which is what someone invoking `return()` would expect). That is, `return` is propagated much like an exception.

##### How to think about `yield*`

There are two ways to think about `yield*`:

* As a function call from generator to generator.
* In order to understand `return()`, it helps to ask yourself: what should happen if I copy-pasted the code of the callee function into the code of the caller function.

### Generators as coroutines (cooperative multitasking)

We have seen generators being used as either sources or sinks of data. For many applications, it's good practice to strictly separate these two roles, because it keeps things simpler. This section describes the full generator interface (which combines both roles) and one application where both roles are needed: cooperative multitasking, where tasks must be able to both send and receive information.

#### The full generator interface

The full interface of generator objects, `Generator`, handles both output and input and combines two interfaces that we have seen previously: `Iterator` for output and `Observer` for input.

        interface Iterator { // data producer
            next() : IteratorResult;
            return?(value? : any) : IteratorResult;
        }

        interface Observer { // data consumer
            next(value? : any) : void;
            return(value? : any) : void;
            throw(error) : void;
        }

This is the full interface of generator objects ([as described by the ECMAScript language specification][6]):

        interface Generator {
            next(value? : any) : IteratorResult;
            throw(value? : any) : IteratorResult;
            return(value? : any) : IteratorResult;
        }
        interface IteratorResult {
            value : any;
            done : boolean;
        }

#### Cooperative multitasking

Cooperative multitasking is an application of generators where we need them to handle both output and input. Before we get into how that works, let's first review the current state of parallelism in JavaScript [9].

JavaScript runs in a single process. There are two ways in which this limitation is being abolished:

* Multiprocessing: _Web Workers_ let you run JavaScript in multiple processes. Shared access to data is one of the biggest pitfalls of multiprocessing. Web Workers avoid it by not sharing any data. That is, if you want a Web Worker to have a piece of data, you must send it a copy or transfer your data to it (after which you can't access it anymore).
* Cooperative multitasking: There are various patterns and libraries that experiment with cooperative multitasking. Multiple tasks are run, but only one at a time. Each task must explicitly suspend itself, giving it full control over when a task switch happens. In these experiments, data is often shared between tasks. But due to explicit suspension, there are few risks.

Two use cases benefit from cooperative multitasking, because they involve control flows that are mostly sequential, anyway, with occasional pauses:

* Asynchronous computations: A task blocks (pauses) until it receives the result of a long-running computation.
* Streams: A task sequentially processes a stream of data and pauses if there is no data available.

For binary streams, WHATWG is currently working on a [standard proposal][7] that is based on callbacks and promises.

For streams of data, Communicating Sequential Processes (CSP) are an interesting solution. A generator-based CSP library is covered later in this blog post.

For asynchronous computations, Promises [10] have become popular and are included in ECMAScript 6.

##### Simplifying asynchronous code via generators

Several promise-based libraries simplify asynchronous code via generators. Generators are ideal as clients of promises, because they can be suspended until a result arrives.

The following example demonstrates what that looks like if one uses [the library _co_][4] by T.J. Holowaychuk. We need two libraries (if we run Node.js code via babel-node [8]):

        require('isomorphic-fetch'); // polyfill
        let co = require('co');

`co` is the actual library for cooperative multitasking, `isomorphic-fetch` is a polyfill for the new promise-based `fetch` API (a replacement of `XMLHttpRequest`; read "[That's so fetch!][8]" by Jake Archibald for more information). `fetch` makes it easy to write a function `getFile` that returns the text of a file at a `url` via a Promise:

        function getFile(url) {
            return fetch(url)
                .then(request => request.text());
        }

We now have all the ingredients to use `co`. The following task reads the texts of two files, parses the JSON inside them and logs the result.

        co(function* () {
            try {
                let [croftStr, bondStr] = yield Promise.all([  // (A)
                    getFile('http://localhost:8000/croft.json'),
                    getFile('http://localhost:8000/bond.json'),
                ]);
                let croftJson = JSON.parse(croftStr);
                let bondJson = JSON.parse(bondStr);

                console.log(croftJson);
                console.log(bondJson);
            } catch (e) {
                console.log('Failure to read: ' + e);
            }
        });

Note how nicely synchronous this code looks, even though it makes an asynchronous call in line (A). A generator-as-task makes an async call by yielding a promise to the scheduler function `co`. The yielding pauses the generator. Once the promise returns a result, the scheduler resumes the generator by passing it the result via `next()`. A simple version of `co` looks as follows.

        function co(genFunc) {
            let genObj = genFunc();
            run();

            function run(promiseResult = undefined) {
                let item = genObj.next(promiseResult);
                if (!item.done) {
                    // A promise was yielded
                    item.value
                    .then(result => run(result))
                    .catch(error => {
                        genObj.throw(error);
                    });
                }
            }
        }

#### The limitations of cooperative multitasking via generators

_Coroutines_ are cooperatively multitasked tasks that have no limitations: Inside a coroutine, any function can suspend the whole coroutine (the function activation itself, the activation of the function's caller, the caller's caller, etc.).

In contrast, you can only suspend a generator from directly within a generator and only the current function activation is suspended. Due to these limitations, generators are occasionally called _shallow coroutines_ [3].

##### The benefits of the limitations of generators

The limitations of generators have two main benefits:

* Generators are compatible with _event loops_, which provide simple cooperative multitasking in browsers. I'll explain the details momentarily.
* Generators are relatively easy to implement, because only a single function activation needs to be suspended and because browsers can continue to use event loops.

JavaScript already has a very simple style of cooperative multitasking: the event loop [9], which schedules the execution of tasks in a queue. Each task is started by calling a function and finished once that function is finished (that's a simplification of how things actually work, but it'll do for now). Events, `setTimeout()` and other mechanisms add tasks to the queue.

This style of multitasking makes one important guarantee: _run to completion_; every function can rely on not being interrupted by another task until it is finished. Functions become transactions and can perform complete algorithms without anyone seeing the data they operate on in an itermediate state. Concurrent access to shared data makes multitasking complicated and is not allowed by JavaScript's concurrency model. That's why run to completion is a good thing.

Alas, coroutines prevent run to completion, because any function could suspend its caller. For example, the following algorithm consists of multiple steps:

        step1(sharedData);
        step2(sharedData);
        lastStep(sharedData);

If `step2` was to suspend the algorithm, other tasks could run before the last step of the algorithm is performed. Those tasks could contain other parts of the application which would see `sharedData` in an unfinished state.

Generators preserve run to completion, they only suspend themselves and return to their caller. `co` and similar libraries give you most of the power of coroutines:

* They provide schedulers for tasks defined via generators.
* Tasks start with generators and can thus be fully suspended.
* A recursive (generator) function call is only suspendable if it is done via `yield*`. That gives callers control over suspension.

### Examples of generators

This section gives several examples of what generators can be used for.

#### Implementing iterables via generators

In the blog post "[Iterables and iterators in ECMAScript 6][1]", I implemented several iterables "by hand". In this section, I use generators, instead.

##### The iterable combinator `take()`

`take()` converts a (potentially infinite) sequence of iterated values into a sequence of length `n`:

        function* take(n, iterable) {
            for (let x of iterable) {
                if (n <= 0) return;
                n--;
                yield x;
            }
        }

The following is an example of using it:

        let arr = ['a', 'b', 'c', 'd'];
        for (let x of take(2, arr)) {
            console.log(x);
        }
        // Output:
        // a
        // b

An implementation of `take()` without generators is more complicated:

        function take(n, iterable) {
            let iter = iterable[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    if (n > 0) {
                        n--;
                        return iter.next();
                    } else {
                        iter.return()
                        return { done: true };
                    }
                },
                return() {
                    n = 0;
                    iter.return();
                }
            };
        }

Note that the iterable combinator `zip()` does not profit much from being implemented via a generator, because multiple iterables are involved (and `for-of` can't be used).

##### Infinite iterables

`naturalNumbers()` returns an iterable over all natural numbers:

        function* naturalNumbers() {
            for (let n=0;; n++) {
                yield n;
            }
        }

This function is often used in conjunction with a combinator:

        for (let x of take(3, naturalNumbers())) {
            console.log(x);
        }
        // Output
        // 0
        // 1
        // 2

One last time, I show the non-generator implementation, so you can compare:

        function naturalNumbers() {
            let n = 0;
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    return { value: n++ };
                }
            }
        }

##### Array-inspired iterable combinators: `map`, `filter`

Arrays can be transformed via the methods `map` and `filter`. Those methods can be generalized to have iterables as input and iterables as output.

This is the generalized version of `map`:

        function* map(iterable, mapFunc) {
            for (let x of iterable) {
                yield mapFunc(x);
            }
        }

        // Works with infinite iterables!
        let arr = [...take(4, map(naturalNumbers(), x => x * x))];
            // [0, 1, 4, 9]

This is the generalized version of `filter`:

        function* filter(iterable, filterFunc) {
            for (let x of iterable) {
                if (filterFunc(x)) {
                    yield x;
                }
            }
        }

        // Works with infinite iterables!
        let arr = [...take(4, filter(naturalNumbers(), x => (x % 2) === 0))];
            // [0, 2, 4, 6]

#### Generators for lazy evaluation

The next two examples show how generators can be used to process a stream of characters.

* The input is a stream of characters.
* Step 1 – tokenize (characters → words): The characters are grouped into _words_, strings that match the regular expression `/^[A-Za-z0-9]$/`. Non-word characters are ignored, but they separate words. The input of this step is a stream of characters, the output a stream of words.
* Step 2 – extract numbers (words → numbers): only keep words that match the regular expression `/^[0-9]+$/` and convert them to numbers.
* Step 3 – add numbers (numbers → number): produce a single number by computing the total of all numbers in a stream.

The neat thing is that everything is computed _lazily_ (incrementally and on demand): computation starts as soon as the first character arrives. For example, we don't have to wait until we have all characters to get the first word.

##### Lazy pull (generators as iterators)

**Step 1 – tokenize.** The following trick makes the code a bit simpler: the end-of-sequence iterator result (whose property `done` is `false`) is converted into the sentinel value `END_OF_SEQUENCE`.

        function* tokenize(chars) {
            let iterator = chars[Symbol.iterator]();
            let ch;
            do {
                ch = getNextItem(iterator);
                if (isWordChar(ch)) {
                    let word = '';
                    do {
                        word += ch;
                        ch = getNextItem(iterator);
                    } while (isWordChar(ch));
                    yield word;
                }
                // Ignore all other characters
            } while (ch !== END_OF_SEQUENCE);
        }
        const END_OF_SEQUENCE = Symbol();
        function getNextItem(iterator) {
            let item = iterator.next();
            return item.done ? END_OF_SEQUENCE : item.value;
        }
        function isWordChar(ch) {
            return typeof ch === 'string' && /^[A-Za-z0-9]$/.test(ch);
        }

Let's try out tokenization. Note that the spaces and the dot are non-words. They are ignored, but they separate words. We use the fact that strings are iterables over characters (Unicode code points). The final result is an iterable over words, which we turn into an array via the spread operator (`...`).

        > [...tokenize('2 apples and 5 oranges.')]
        [ '2', 'apples', 'and', '5', 'oranges' ]

**Step 2 – extract numbers:** This step is relatively simple, we only `yield` words that contain nothing but digits, after converting them to numbers via `Number()`.

        function* extractNumbers(words) {
            for (let word of words) {
                if (/^[0-9]+$/.test(word)) {
                    yield Number(word);
                }
            }
        }

The following example shows the transformation steps: characters → words → numbers.

        > [...extractNumbers(tokenize('2 apples and 5 oranges.'))]
        [ 2, 5 ]

**Step 3 – add numbers:** This last step is performed by a normal function that pulls the results and reports their total.

        function summarize(numbers) {
            let result = 0;
            for (let n of numbers) {
                result += n;
            }
            return result;
        }

The final result shows us that there are 7 things in the input sentence.

        > summarize(extractNumbers(tokenize('2 apples and 5 oranges.')))
        7

##### Lazy push (generators as observables)

Not much work is needed to convert the previous pull-based algorithm into a push-based one. The steps are the same. But instead of finishing via pulling, we start via pushing (in both cases, non-generator functions are used).

As previously explained, if generators receive input via `yield`, the first invocation of `next()` on the generator object doesn't do anything. That's why we again use the following helper function:

        /**
         * Returns a function that, when called,
         * returns a generator object that is immediately
         * ready for input via `next()`
         */
        function coroutine(generatorFunction) {
            return function (...args) {
                let generatorObject = generatorFunction(...args);
                generatorObject.next();
                return generatorObject;
            };
        }

The following function `send()` wraps the chain of generators. Its parameter `receiver` holds the generator object of the first generator in the chain. `send()` pushes the contents of `iterable` to the `receiver`, via `next()`.

        function send(iterable, receiver) {
            for (let x of iterable) {
                receiver.next(x);
            }
            receiver.return(); // signal end of stream
        }

When a generator processes a stream, it needs to be aware of the end of the stream, so that it can clean up properly. For pull, we did this via a special end-of-stream sentinel. For push, the end-of-stream is signaled via `return()`.

Let's test `send()` via a generator that simply outputs everything it receives:

        const logItems = coroutine(function* () {
            try {
                while (true) {
                    let item = yield;
                    console.log(item);
                }
            } finally {
                console.log('DONE');
            }
        });

Let's send `logItems()` three "characters" via a string (which is an iterable over Unicode code points).

        > send('abc', logItems());
        a
        b
        c
        DONE

**Step 1 – tokenize.** Note how this generator reacts to the end of the stream (as signaled via `return()`) in two `finally` clauses. We depend on `return()` being sent to either one of the two `yield`s. Otherwise, the generator would never terminate, because the infinite loop starting in line (A) would never terminate.

        const tokenize = coroutine(function* (receiver) {
            try {
                while (true) { // (A)
                    let ch = yield;
                    if (isWordChar(ch)) {
                        // A word has started
                        let word = '';
                        try {
                            do {
                                word += ch;
                                ch = yield;
                            } while (isWordChar(ch));
                        } finally {
                            // The word is finished.
                            // We get here if
                            // (a) the loop terminates normally
                            // (b) the loop is terminated via `return()`
                            receiver.next(word);
                        }
                    }
                    // Ignore all other characters
                }
            } finally {
                // We only get here if the infinite loop is terminated
                // via `return()`. Forward `return()` to `receiver` so
                // that it is also aware of the end of stream.
                receiver.return();
            }
        });

        function isWordChar(ch) {
            return /^[A-Za-z0-9]$/.test(ch);
        }

`tokenize()` demonstrates that generators work well as implementations of linear state machines. In this case, the machine has two states: "inside a word" and "not inside a word".

Let's tokenize a string:

        > send('2 apples and 5 oranges.', tokenize(logItems()));
        2
        apples
        and
        5
        oranges

**Step 2 – extract numbers:** This step is straightforward.

        const extractNumbers = coroutine(function* (receiver) {
            try {
                while (true) {
                    let word = yield;
                    if (/^[0-9]+$/.test(word)) {
                        receiver.next(Number(word));
                    }
                }
            } finally {
                // Only reached via `return()`, forward.
                receiver.return();
            }
        });

Let's log the numbers appearing in a string:

        > send('2 apples and 5 oranges.', tokenize(extractNumbers(logItems())));
        2
        5
        DONE

**Step 3 – add numbers:** This time, we react to the end of the stream by pushing a single value and then closing the receiver.

        const addNumbers = coroutine(function* (receiver) {
            let result = 0;
            try {
                while (true) {
                    result += yield;
                }
            } finally {
                // We received an end-of-stream
                receiver.next(result);
                receiver.return(); // signal end of stream
            }
        });

Let's sum up the numbers appearing inside a string:

        > send('2 apples and 5 oranges.', tokenize(extractNumbers(addNumbers(logItems()))));
        7
        DONE

As mentioned before, one benefit of a push-based approach is that it allows you to process data that you receive asynchronously.

#### Cooperative multi-tasking via generators

##### Pausing long-running tasks

In this example, we create a counter that is displayed on a web page. We improve an initial version until we have a cooperatively multitasked version that doesn't block the main thread and the user interface.

This is the part of the web page in which the counter should be displayed:

        <body>
            Counter: <span id="counter"></span>
        </body>

This function displays a counter that counts up forever (well, until the number overflows):

        function countUp(start = 0) {
            const counterSpan = document.querySelector('#counter');
            while (true) {
                counterSpan.textContent = String(start);
                start++;
            }
        }

If you ran this function, it would completely block the user interface thread in which it runs and its tab would become unresponsive.

Let's implement the same functionality via a generator that periodically pauses via `yield` (a scheduling function for running this generator is shown at the end):

        function* countUp(start = 0) {
            const counterSpan = document.querySelector('#counter');
            while (true) {
                counterSpan.textContent = String(start);
                start++;
                yield; // pause
            }
        }

Let's add one small improvement. We move the update of the user interface to another generator, `displayCounter`, which we call via `yield*`. As it is a generator, it can also take care of pausing.

        function* countUp(start = 0) {
            while (true) {
                start++;
                yield* displayCounter(start);
            }
        }
        function* displayCounter(counter) {
            const counterSpan = document.querySelector('#counter');
            counterSpan.textContent = String(counter);
            yield; // pause
        }

Lastly, this is a scheduling function that we can use to run `countUp()`. Each execution step of the generator is handled by a separate task, which is created via `setTimeout()`. That means that the user interface can schedule other tasks in between and will remain responsive.

        function run(generatorObject) {
            if (!generatorObject.next().done) {
                // Add a new task to the event queue
                setTimeout(function () {
                    run(generatorObject);
                }, 1000);
            }
        }

With the help of `run`, we get a (nearly) infinite count-up that doesn't block the user interface:

        run(countUp());

##### Cooperative multitasking with generators and Node.js-style callbacks

If you call a generator function (or method), it does not have access to its generator object; its `this` is the `this` it would have if it were a non-generator function. A work-around is to pass the generator object into the generator function via `yield`.

The following Node.js script uses this technique, but wraps the generator object in a callback (`next`, line (A)). It must be run via `babel-node` [8].

        import {readFile} from 'fs';

        let fileNames = process.argv.slice(2);

        console.log(fileNames, readFile);

        run(function* () {
            let next = yield; // (A)
            for (let f of fileNames) {
                let contents = yield readFile(f, { encoding: 'utf8' }, next);
                console.log('-------------', f);
                console.log(contents);
            }
        });

In line (A), we get a callback that we can use with functions that follow Node.js callback conventions. The callback uses the generator object to wake up the generator, as you can see in the implementation of `run()`:

        function run(generatorFunction) {
            let generatorObject = generatorFunction();

            // Step 1: Proceed to first `yield`
            generatorObject.next();

            // Step 2: Pass in a function that the generator can use as a callback
            let nextFunction = createNextFunction(generatorObject);
            generatorObject.next(nextFunction);

            // Subsequent invocations of `next()` are triggered by `nextFunction`
        }

        function createNextFunction(generatorObject) {
            return function(error, result) {
                if (error) {
                    generatorObject.throw(error);
                } else {
                    generatorObject.next(result);
                }
            };
        }

##### Communicating Sequential Processes (CSP)

The library [`js-csp`][9] brings Communicating Sequential Processes (CSP) to JavaScript, a style of cooperative multitasking that is similar to ClojureScript's core.async and Go's _goroutines_. `js-csp` has two abstractions:

* Processes: are cooperatively multitasked tasks and implemented by handing a generator function to the scheduling function `go()`.
* Channels: are queues for communication between processes. Channels are created by calling `chan()`.

As an example, let's use CSP to handle DOM events, in a manner reminiscent of Functional Reactive Programming. The following code uses the function `listen()` (which is shown later) to create a channel that outputs `mousemove` events. It then continuously retrieves the output via `take`, inside an infinite loop. Thanks to `yield`, the process blocks until the channel has output.

        import csp from 'js-csp';

        csp.go(function* () {
            let element = document.querySelector('#uiElement1');
            let channel = listen(element, 'mousemove');
            while (true) {
                let event = yield csp.take(channel);
                let x = event.layerX || event.clientX;
                let y = event.layerY || event.clientY;
                element.textContent = `${x}, ${y}`;
            }
        });

`listen()` is implemented as follows.

        function listen(element, type) {
            let channel = csp.chan();
            element.addEventListener(type,
                event => {
                    csp.putAsync(channel, event);
                });
            return channel;
        }

This example is taken from the blog post "[Taming the Asynchronous Beast with CSP Channels in JavaScript][10]" by James Long. Consult this blog post for more information on CSP.

### Inheritance

This is a diagram of how various objects are connected in ECMAScript 6 (it is based on [Allen Wirf-Brock's diagram][11] in the ECMAScript specification):

![][12]

Legend:

* The white (hollow) arrows express the has-prototype relationship (inheritance) between objects. In other words: a white arrow from `x` to `y` means that `Object.getPrototypeOf(x) === y`.
* Parentheses indicate that an object exists, but is not accessible via a global variable.
* An `instanceof` arrow from `x` to `y` means that `x instanceof y`.
    * Remember that `o instanceof C` is equivalent to `C.prototype.isPrototypeOf(o)`.
* A `prototype` arrow from `x` to `y` means that `x.prototype === y`.

The diagram reveals two interesting facts:

First, a generator function `g` works very much like a constructor (you can even invoke it via `new`): The generator objects it creates are instances of it, methods added to `g.prototype` become prototype methods, etc.:

        > function* g() {}
        > g.prototype.hello = function () { return 'hi!'};
        > let obj = g();
        > obj instanceof g
        true
        > obj.hello()
        'hi!'

Second, if you want to make methods available for all generator objects, it's best to add them to `(Generator.object)`. One way of accessing that object is as follows:

        > let Generator_prototype = Object.getPrototypeOf(function* () {}).prototype;
        > Generator_prototype.hello = function () { return 'hi!'};
        > let generatorObject = (function* () {})();
        > generatorObject.hello()
        'hi!'

#### `IteratorPrototype`

There is no `(Iterator)` in the diagram, because no such object exists. But, given how `instanceof` works and because `(IteratorPrototype)` is a prototype of `g1()`, you could still say that `g1()` is an instance of `Iterator`.

All iterators in ES6 have `(IteratorPrototype)` in their prototype chain. That object is iterable, because it has the following method. Therefore, all ES6 iterators are iterable (as a consequence, you can apply `for-of` etc. to them).

        [Symbol.iterator]() {
            return this;
        }

The specification recommends to use the following code to access `(IteratorPrototype)`:

        const proto = Object.getPrototypeOf.bind(Object);
        let IteratorPrototype = proto(proto([][Symbol.iterator]()));

You could also use:

        let IteratorPrototype = proto(proto(function* () {}.prototype));

Quoting the ECMAScript 6 specification:

> ECMAScript code may also define objects that inherit from `IteratorPrototype`. The `IteratorPrototype` object provides a place where additional methods that are applicable to all iterator objects may be added.

`IteratorPrototype` will probably become directly accessible in an upcoming version of ECMAScript and contain tool methods such as `map()` and `filter()` ([source][13]).

#### The value of `this` in generators

A generator function combines two concerns:

1. It is a function that sets up and returns a generator object.
2. It contains the code that the generator object steps through.

That's why it's not immediately obvious what the value of `this` should be inside a generator.

In function calls and method calls, `this` is what it would be if `gen()` wasn't a generator function, but a normal function:

        function* gen() {
            'use strict'; // just in case
            yield this;
        }

        // Retrieve the yielded value via destructuring
        let [functionThis] = gen();
        console.log(functionThis); // undefined

        let obj = { method: gen };
        let [methodThis] = obj.method();
        console.log(methodThis === obj); // true

If you access `this` in a generator that was invoked via `new`, you get a `ReferenceError` ([source: ES6 spec][14]):

        function* gen() {
            console.log(this); // ReferenceError
        }
        new gen();

We have previously seen a simple work-around: wrap the generator in a normal function that hands the generator its generator object via `yield`.

### Style consideration: whitespace before and after the asterisk

Reasonable – and legal – variations of formatting the asterisk are:

* A space before and after it:  
`function * foo(x, y) { ... }`
* A space before it:  
`function *foo(x, y) { ... }`

* A space after it:  
`function* foo(x, y) { ... }`
* No whitespace before and after it:  
`function*foo(x, y) { ... }`

Let's figure out which of these variations make sense for which constructs and why.

#### Generator function declarations and expressions

Here, the star is only used because `generator` (or something similar) isn't available as a keyword. If it were, then a generator function declaration would look like this:

        generator foo(x, y) {
            ...
        }

Instead of `generator`, ECMAScript 6 marks the `function` keyword with an asterisk. Thus, `function*` can be seen as a synonym for `generator`, which suggests writing generator function declarations as follows.

        function* foo(x, y) {
            ...
        }

Anonymous generator functions would be formatted like this:

        const foo = function* (x, y) {
            ...
        }

#### Concise generator method definitions

When writing a concise generator method definitions, I recommend to format the asterisk as follows.

        let obj = {
            * generatorMethod(x, y) {
                ...
            }
        };

There are three arguments in favor of writing a space after the asterisk.

First, the asterisk shouldn't be part of the method name. On one hand, it isn't part of the name of a generator function. On the other hand, the asterisk is only mentioned when defining a generator, not when using it.

Second, a concise generator method definition is an abbreviation for the following syntax. (To make my point, I'm redundantly giving the function expression a name, too.)

        let obj = {
            generatorMethod: function* generatorMethod(x, y) {
                ...
            }
        };

If concise method definitions are about omitting the `function` keyword then the asterisk should probably be followed by a space.

Third, generator method definitions are syntactically similar to getters and setters (which are already available in ECMAScript 5):

        let obj = {
            get foo() {
                ...
            }
            set foo(value) {
                ...
            }
        }

The keywords `get` and `set` can be seen as modifiers of a normal concise method definition. Arguably, an asterisk is also such a modifier.

#### Recursive `yield`

The following is an example of a generator function yielding its own yielded values recursively:

        function* foo(x) {
            ...
            yield* foo(x - 1);
            ...
        }

The asterisk marks a different kind of `yield` operator, which is why the above way of writing it makes sense.

#### Documenting generator functions and methods

Kyle Simpson (@getify) proposed something interesting: Given that we often append parentheses when we write about functions and methods such as `Math.max()`, wouldn't it make sense to prepend an asterisk when writing about generator functions and methods? For example: should we write `*foo()` to refer to the generator function in the previous subsection? Let me argue against that.

When it comes to writing a function that returns an iterable, a generator is only one of the several options. I think it is better to not give away this implementation detail via marked function names.

Furthermore, you don't use the asterisk when calling a generator function, but you do use parentheses.

Lastly, the asterisk doesn't provide useful information – `yield*` can also be used with functions that return an iterable. But it may make sense to mark the names of functions and methods that return iterables (including generators). For example, via the suffix `Iter`.

### Conclusion

I hope that this blog post convinced you that generators are a useful and versatile tool.

I like that generators let you implement cooperatively multitasked tasks that block while making asynchronous function calls. In my opinion that's the right mental model for async calls. I hope that JavaScript goes further in this direction in the future. If one generator async-calls another generator, the indirection via promises is not needed. It could be avoided by [the generator-based async functions][15] that have been proposed for ECMAScript 2016.

### References

Acknowledgement: items 1–3 are sources of this blog post.

1. "[Async Generator Proposal][16]" by Jafar Husain
2. "[A Curious Course on Coroutines and Concurrency][17]" by David Beazley
3. "[Why coroutines won't work on the web][18]" by David Herman
4. "[Exploring ES6: Upgrade to the next version of JavaScript][19]", book by Axel
5. [Iterables and iterators in ECMAScript 6][1]
6. [Destructuring and parameter handling in ECMAScript 6][20]
7. "[The spread operator (`...`)][21]", a section in the blog post "Destructuring and parameter handling in ECMAScript 6".
8. [Using the ES6 transpiler Babel on Node.js][22]
9. [ECMAScript 6 promises (1/2): foundations][23] [explains the event loop and more]
10. [ECMAScript 6 promises (2/2): the API][24]
11. [Classes in ECMAScript 6 (final semantics)][25]

[1]: http://www.2ality.com/2015/02/es6-iteration.html
[2]: http://www.2ality.com/2015/03/es6-generators.html
[3]: https://github.com/rauschma/generator-examples
[4]: https://github.com/tj/co
[5]: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-expressions
[6]: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-generator-prototype
[7]: https://streams.spec.whatwg.org/
[8]: http://jakearchibald.com/2015/thats-so-fetch/
[9]: https://github.com/ubolonton/js-csp
[10]: http://jlongster.com/Taming-the-Asynchronous-Beast-with-CSP-in-JavaScript
[11]: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorfunction-objects
[12]: http://3.bp.blogspot.com/-kGgpHT0wjqU/VRkKCblRpRI/AAAAAAAAA70/BuiA8d-aZto/s1600/generator_inheritance.jpg
[13]: https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-07/jul-30.md#47-revisit-comprehension-decision-from-last-meeting
[14]: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generator-function-definitions-runtime-semantics-evaluatebody
[15]: https://github.com/lukehoban/ecmascript-asyncawait
[16]: https://github.com/jhusain/asyncgenerator
[17]: http://www.dabeaz.com/coroutines/
[18]: http://calculist.org/blog/2011/12/14/why-coroutines-wont-work-on-the-web/
[19]: http://exploringjs.com/
[20]: http://www.2ality.com/2015/01/es6-destructuring.html
[21]: the_spread_operator_%28...%29
[22]: http://www.2ality.com/2015/03/babel-on-node.html
[23]: http://www.2ality.com/2014/09/es6-promises-foundations.html
[24]: http://www.2ality.com/2014/10/es6-promises-api.html
[25]: http://www.2ality.com/2015/02/es6-classes-final.html

