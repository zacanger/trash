var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;

var About = require('./About');
var Contact = require('./Contact');
var Home = require('./Home');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about/brandon'>About</Link>
        <Link to='/contact'>Contact</Link>

        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
  <Router>
    <Route component={App} path='/'>
      <IndexRoute component={Home} />
      <Route component={About} path='about/:name' />
      <Route component={Contact} path='contact' />
    </Route>
  </Router>,
  document.getElementById('app')
);


////////////////////////////////////
// BREAK
////////////////////////////////////


// add flux to our chat project


////////////////////////////////////
// MINI PROJECT (IF TIME)
////////////////////////////////////

// https://github.com/ReactWeek/mini3-todofire