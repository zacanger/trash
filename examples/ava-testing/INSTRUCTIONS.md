Now, we'll add a new script which uses `nodemon` to watch the `app/` directory
and execute our `cover` script whenever files change in that directory. 🐯 Add this
to the `scripts` object in your `package.json`.

```
"watch:cover": "nodemon --quiet --watch app --exec npm run cover -s"
```

- `--quiet` -> to reduce the output in our terminal from `nodemon`
- `--watch app` -> respond to changes in the `app/` directory
- `--exec` -> run the following command when a relevant file has changed
- `-s` -> to reduce the output in our terminal from `npm`

🐯 Now if you run `npm run watch:cover`, you should see the same output as before, but
the process wont exit. Now try to change one of the files in the `app/` directory
(add a newline) and the tests should re-run.

> protip: Install [`npm-quick-run`](http://npm.im/npm-quick-run) to type less :-)
>
> protip: Install [`npm-run`](http://npm.im/npm-run) while working with local npm-installed binaries

🐯 Now stop the process with <kbd>CTL</kbd>+<kbd>c</kbd>

## babel-register

So far, we haven't actually tested anything. All of our tests are totally empty.
One thing that we're about to discover as we start importing our modules into our
tests is that AVA wont transpile them with `babel` for us. Let's see what I mean.
🐯 Go ahead and open the `Customers.test.js` file in the `app/store/` directory and uncomment the line that says:
`import store from './Customers'`.

🐯 Now try to run `npm run test` and you'll get output with this error message:

```
SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
```

We have to transpile on the fly by ourselves. Having this control over what happens to our source code is actually quite
nice (even if it means a bit more work for us).

So we need to transpile this code on the fly using `babel-register`, 🐯 so let's go ahead and install the latest
version (`6.5.1` at the time of this writing) of that now:

```
npm install --save-dev babel-register
```

With that, we now need to require that file in every one of our test files that require code we want to transpile. Just
kidding! That would be incredibly lame! AVA has a flag (`--require`) that we can use to basically do this for us.
However, instead of just using `--require babel-register`, we're going to add a new file to do this for us because
we're going to add more environment setup code in there soon.

🐯 So create a new directory called `test/helpers/` and put a new file called `setup-test-env.js`.
Then and place this in there:

```javascript
require('babel-register')
require('babel-polyfill') // this has already been installed. May as well :-)
```

🐯 Now, we're going to configure `AVA` similar to how we configured `nyc`. We'll add a property called `ava` to the root
of our `package.json` like so:

```javascript
"ava": {
  "require": [
    "./test/helpers/setup-test-env.js"
  ]
}
```

🐯 Now if you run the `npm run test` you should get this again:

```
- containers › CustomerList › Renders no customers and add button
- containers › CustomerList › Renders customers and add button
- containers › CustomerList › Responds to store updates
- containers › CustomerList › unsubscribes when unmounted
- components › Toggle › toggle--off class applied by default
- components › Toggle › toggle--on class applied when initialToggledOn specified to true
- components › Toggle › invokes the onToggle prop when clicked
- store › Customers › customers should start with empty
- store › Customers › setting customers and getting them
- store › Customers › subscribing to the store

0 tests passed
10 tests todo
```

Awesome! 🎉 Now, just to be sure, run `npm run cover` and you should get output like this:


```
---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
 store/        |    46.15 |      100 |        0 |    46.15 |                |
  Customers.js |    46.15 |      100 |        0 |    46.15 |... 34,35,36,44 |
---------------|----------|----------|----------|----------|----------------|
All files      |    46.15 |      100 |        0 |    46.15 |                |
---------------|----------|----------|----------|----------|----------------|
```

Alrighty, let's deal with these abysmal coverage numbers!

## Test Customers.js

Now we can finally start writing some tests! This module has absolutely nothing to
do with React. It's just regular, vanilla JavaScript! That's the way we like it.
The more we can do that, the better!

There are three APIs exposed from `Customer.js` that we'll be wanting to test:

- `getCustomers`
- `setCustomers`
- `subscribe`

Each is documented using JSDoc. 🐯 Go ahead and open the `Customer.test.js` file and follow the instructions in the
comments. I recommend you run `npm run watch:cover` to have the tests run while you're updating the file. Now go ahead
and implement! You want to look at the comment by the [`sinon`](http://npm.im/sinon) import and the comment at the
bottom about adding an `afterEach`. Look up how to do that
[here](https://www.npmjs.com/package/ava#before--after-hooks).

Once you're all done, your output should look like this:

```
  - containers › CustomerList › Renders no customers and add button
  - containers › CustomerList › Renders customers and add button
  - components › Toggle › toggle--off class applied by default
  - components › Toggle › toggle--on class applied when initialToggledOn specified to true
  - components › Toggle › invokes the onToggle prop when clicked
  - containers › CustomerList › Responds to store updates
  - containers › CustomerList › unsubscribes when unmounted
  ✔ store › Customers › customers should start with empty
  ✔ store › Customers › setting customers and getting them
  ✔ store › Customers › subscribing to the store

  3 tests passed
  7 tests todo

---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
 store/        |      100 |      100 |      100 |      100 |                |
  Customers.js |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
All files      |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
```

😎 stellar!

## Test Toggle.js

Alright! Now we can finally get to testing some React code! As [my slides](http://kcd.im/react-ava#/2/2) illustrate,
React components have three inputs that need to be considered when writing tests:

1. Props
2. User
3. Data

In `Toggle.js` we'll be concerned about the `Props` and `User` inputs. We'll cover
the `Data` input with `CustomerList`.

When testing a React component, it's extremely tempting to go down the path of
reimplementing the component in the test. Essentially validating that this div
has a child button which has these attributes and this text. This makes for a
pretty finicky test suit because anytime you want to refactor the code (not
actually make any changes visible) you have to update the tests.

Instead we strive to simply test the output itself. So we're going to use the
function `renderToStaticMarkup` from `react-dom/server` to take a React component
and render it into its pure HTML form. We'll then make assertions that the output
contains the pieces that we're looking for. This approach definitely comes with
trade-offs, but its pros outweigh its cons.

Before we start writing React tests with AVA, we have one final thing to configure for AVA. Something that's a bit of a
gotcha is AVA actually uses its own configuration for transpiling your tests that's separate from your configuration for
transpiling your source. This can be a bit confusing at first. What we're going to do is tell AVA to transpile our tests
the same way it transpiles our source. This is configured in our `package.json` in the `ava` property we added earlier.

🐯 Update the `ava` property to look like this:

```
"ava": {
  "babel": "inherit",
  "require": [
    "./test/helpers/setup-test-env.js"
  ]
}
```

We're effectively telling AVA to use the same configuration that our app uses. Which is using the `.babelrc` file.

🐯 Go ahead and open `Toggle.test.js` in `app/components/` and check out the comments.

Once you get the first two tests working, your `npm run cover` output should look like this:

```
  - containers › CustomerList › Renders no customers and add button
  - containers › CustomerList › Renders customers and add button
  - containers › CustomerList › Responds to store updates
  - containers › CustomerList › unsubscribes when unmounted
  ✔ store › Customers › customers should start with empty
  ✔ store › Customers › setting customers and getting them
  ✔ store › Customers › subscribing to the store
  ✔ components › Toggle › toggle--off class applied by default
  ✔ components › Toggle › toggle--on class applied when initialToggledOn specified to true
  - components › Toggle › invokes the onToggle prop when clicked

  5 tests passed
  5 tests todo


---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
 components/   |       70 |      100 |    66.67 |       70 |                |
  Toggle.js    |       70 |      100 |    66.67 |       70 |       11,12,13 |
 store/        |      100 |      100 |      100 |      100 |                |
  Customers.js |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
All files      |    86.96 |      100 |    88.89 |    86.96 |                |
---------------|----------|----------|----------|----------|----------------|
```

We're missing coverage on the `handleToggleClick` lines. That's what that thrid test is for. So far, we've only tested
changing the `Props` input to our component. Now we need to simulate the `User` input.

To do this, we'll leverage React's Synthetic Event system by using the official
[test utils](https://facebook.github.io/react/docs/test-utils.html):
`react-addons-test-utils`. 🐯 Go ahead and install the latest version of this now
(`0.14.8` is the latest at the time of this writing):

```
npm install --save-dev react-addons-test-utils
```

You'll notice that the instructions require the use of `document.createElement`
which requires a DOM. That's because when you're simulating the User inputs, you
need a DOM. Unfortunately, AVA does not officially support running in the browser
([it's on the roadmap](https://github.com/sindresorhus/ava/issues/24), and
someone seemed to have success
[getting AVA to work with karma](https://github.com/angular/angular.js/issues/13971)).
Luckily we have [jsdom](http://npm.im/jsdom) which works great for our use-case.
It just takes installing and getting set up for each of our tests. 🐯 Let's install
the latest version (`8.3.0` at the time of this writing).

```
npm install --save-dev jsdom
```

With that installed, now we need each one of our tests to have the global
environment set up with this (because most of our tests will need this). 🐯 So go
ahead and open the `setup-test-env.js` file in the `test/helpers/` directory and just
paste this in:

```javascript
/**
 * This is used to set up the environment that's needed for most
 * of the unit tests for the project which includes babel transpilation
 * with babel-register, polyfilling, and initializing the DOM with jsdom
 */
require('babel-register')
require('babel-polyfill')

global.document = require('jsdom').jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator
```

Now, because we've configured AVA to `require` this file, next time our tests
run, they'll have this environment set up for them and have access to the global
`document` for creating elements. Which is what you need to do now. Go! 🏁

Once you have your tests implemented, your `npm run cover` output should look
like this:


```
  - containers › CustomerList › Renders no customers and add button
  - containers › CustomerList › Renders customers and add button
  - containers › CustomerList › Responds to store updates
  - containers › CustomerList › unsubscribes when unmounted
  ✔ store › Customers › customers should start with empty
  ✔ store › Customers › setting customers and getting them
  ✔ components › Toggle › toggle--off class applied by default
  ✔ components › Toggle › toggle--on class applied when initialToggledOn specified to true
  ✔ store › Customers › subscribing to the store
  ✔ components › Toggle › invokes the onToggle prop when clicked

  6 tests passed
  4 tests todo

---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
 components/   |      100 |      100 |      100 |      100 |                |
  Toggle.js    |      100 |      100 |      100 |      100 |                |
 store/        |      100 |      100 |      100 |      100 |                |
  Customers.js |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
All files      |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
```

🔥🔥🔥 awesome!

## Test CustomerList.js

So we've successfully tested the `Props` and `User` inputs. Now what do we do
about `Data` inputs? Well, more and more applications are using the concept of a
single state tree to manage their data and with abstractions like Redux, you don't
often have situations where you `setState` in your component directly based on
changes to data (an abstraction like `react-redux` does this for you). However,
there are situations where we do invoke `setState` in our components manually,
and for those situations we need to have a mechanism for triggering that.

The challenge with this is we often depend on
[singletons](https://en.wikipedia.org/wiki/Singleton_pattern) to store our data
and subscribe to changes. This makes testing difficult because we either need to
make a mechanism for resetting the store between tests, or we run the risk of
tests mucking with the sweet isolation of our tests that we enjoy from AVA.

There is a rather simple solution to this however, it's called `defaultProps` (or,
if you're using `createClass`, it's called `getDefaultProps`). Rather than just
importing a singleton store and using it directly, we specify it as a default prop
and use it from `this.props`. What's nice about this is it allows us to override
it for our tests.

If you look at the currently implementation of `CustomerList` in the
`app/containers` directory, you'll see that it is just using the imported store.
🐯 Your task is to update `CustomerList.js` component to use `defaultProps` instead
and reference the store via `props.store`.

🐯 Once you've finished that, open the `CustomerList.test.js` file.

You'll notice that in the last test, you have to use `document.createElement`.
Good thing we already set up the DOM in our `setup-tests-env.js` so we can do
that! The reason we have to is the lifecycle hook `componentDidMount` does not run
when you use `renderToStaticMarkup` and that's where this component subscribes to
the store. Same goes for the unsubscription code in `componentWillUnmount`.

For this one, you might consider taking a brief glance at the solution if you get
stuck. An abstraction can really reduce the shared logic between these tests.

Once you've got everything passing, your output should look like this:

```
  ✔ store › Customers › customers should start with empty
  ✔ store › Customers › setting customers and getting them
  ✔ store › Customers › subscribing to the store
  ✔ components › Toggle › toggle--off class applied by default
  ✔ components › Toggle › toggle--on class applied when initialToggledOn specified to true
  ✔ components › Toggle › invokes the onToggle prop when clicked
  ✔ containers › CustomerList › Renders no customers and add button
  ✔ containers › CustomerList › Renders customers and add button
  ✔ containers › CustomerList › Responds to store updates
  ✔ containers › CustomerList › unsubscribes when unmounted

  10 tests passed

------------------|----------|----------|----------|----------|----------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------------|----------|----------|----------|----------|----------------|
 components/      |      100 |      100 |      100 |      100 |                |
  Toggle.js       |      100 |      100 |      100 |      100 |                |
 containers/      |      100 |      100 |      100 |      100 |                |
  CustomerList.js |      100 |      100 |      100 |      100 |                |
 store/           |      100 |      100 |      100 |      100 |                |
  Customers.js    |      100 |      100 |      100 |      100 |                |
------------------|----------|----------|----------|----------|----------------|
All files         |      100 |      100 |      100 |      100 |                |
------------------|----------|----------|----------|----------|----------------|
```

### Redux

You may be wondering, "how do I test components that use Redux?" Well, this repo
doesn't really show that, but it's because it's pretty much exactly how you do
a normal `Props` input test because if you're using `connect` from `react-redux`
then you simply `export` the component that you're wrapping in `connect` for
testing purposes, and just test that the same way you do other components with
`Props` inputs.

If you're not using `connect` and you're subscribing to it yourself, then you'll
simply treat it like the `Data` input test where you accept the store as a prop
and add an item in `defaultProps` for the actual store singleton.
