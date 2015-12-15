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
				this.setState({	textToDisplay: 'qux, bax'	})
			}, 500)
		}
	},

	componentWillMount() {
		return {}
	},

	_handleClick() {
		this.setState({textToDisplay: 'yeah. good job.'})
	}

	render() {
		return (
			<span onCLick={this._handleClick} className="oi">{this.state.textToDisplay}</span>
			<input type='text' value='' placeholder='howdy' />
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'))




//////////////////////////////////////
/// REACT BASICS: events
//////////////////////////////////////
// 1. Create a new, custom method called `_handleClick`
// 2. Have this new method change the value of `textToDisplay` to something else
// 3. Set the `onClick` property of your React component to the new `_handleClick` method you just defined
// 3. Run `webpack` and make sure you can still load `index.html` in a browser
// 4. Wait 2 seconds to allow the text to change. Then click the text and watch it change again.