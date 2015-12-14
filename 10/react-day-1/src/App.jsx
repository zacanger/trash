var React 		= require('react')
	, ReactDOM  = require('react-dom')

var App = React.createClass({
	getInitialState() {
		return {
			textToDisplay: 'foo, bar'
		}
	},

	componentdidmount() {
		return {
			setTimeout(() => {
				this.setState({
					textToDisplay: 'qux, bax'
				})}, 500)
		}
	},

	componentWillMount() {
		return {}
	},

	render() {
		return (
			<span className="oi">{this.state.textToDisplay}</span>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'))


//////////////////////////////////////
// 1. JSX comes built in with Babel, so we don't need to install anything additional
// 2. Convert `createElement` to JSX
// 3. Run `webpack` and make sure you can still load `index.html` in a browser




//////////////////////////////////////
/// REACT BASICS: lifecycle
//////////////////////////////////////
// 1. Add the most commonly used lifecycle methods to your React component: `getInitialState` and `componentDidMount`
// 2. Add a `console.log` into each lifecycle method so we can see the order in which they are called.
// 3. Run `webpack` and make sure you can still load `index.html` in a browser, check out the console logs to see the method order




//////////////////////////////////////
/// REACT BASICS: getInitialState
//////////////////////////////////////
// 1. Within 'getInitialState', define a new state variable within the component called `textToDisplay`, and set it's value to `Hello World!`
// 2. Replace the "World" text in the `render` method with the value of this new state variable: `this.state.textToDisplay`
// 3. Run `webpack` and make sure you can still load `index.html` in a browser




//////////////////////////////////////
/// REACT BASICS: setState
//////////////////////////////////////
// 1. Within 'componentDidMount', define a `setTimeout` method that will update the `textToDisplay` state value to your name after 2 seconds
// 2. Run `webpack` and make sure you can still load `index.html` in a browser
// 3. After 2 seconds, you should see the displayed text change from "Hello World!" to "Hello [Your Name]!" (hint: it won't work!)
// 4. Update `setTimeout` to use a fat-arrow method to avoid scope issues
// 5. Run 'webpack' and take another look...it should work now




//////////////////////////////////////
/// REACT BASICS: styles (css classes & inline styles)
//////////////////////////////////////
// 1. Give your React component a css class name by defining the `className` attribute
// 2. Use the css class name to change the displayed text to red
// 3. Run `webpack` and make sure you can still load `index.html` in a browser
// 3. Remove the class name and use the `style` attribute to change the displayed text to blue
// 3. Run `webpack` and make sure you can still load `index.html` in a browser




//////////////////////////////////////
/// REACT BASICS: events
//////////////////////////////////////
// 1. Create a new, custom method called `_handleClick`
// 2. Have this new method change the value of `textToDisplay` to something else
// 3. Set the `onClick` property of your React component to the new `_handleClick` method you just defined
// 3. Run `webpack` and make sure you can still load `index.html` in a browser
// 4. Wait 2 seconds to allow the text to change. Then click the text and watch it change again.