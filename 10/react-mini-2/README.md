
Once you get done, your AddChat.js file should look like this 
```javascript
var React = require('react');
var $ = require('jquery');
var AddChat = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      url: 'https://api.parse.com/1/classes/chat'
    };
  },
  addChat: function(){
    $.ajax({
      url: this.props.url,
      type: 'POST',
      data: JSON.stringify({text: this.refs.newChatInput.getDOMNode().value}),
      beforeSend: function(request) {
        request.setRequestHeader("X-Parse-Application-Id", 'YOUR-PARSE-APP-ID');
        request.setRequestHeader("X-Parse-REST-API-Key", 'YOUR-PARSE-API-KEY');
        request.setRequestHeader("Content-Type", 'application/json');
      },
      error: function() {
        console.log('error on post');
      },
      success: function() {
        this.refs.newChatInput.getDOMNode().value = '';
        console.log('Successful Post');
      }.bind(this)
    })
  },
  handleSubmit: function(e){
    if(e.keyCode === 13){
      this.addChat();
    }
  },
  render: function(){
    return (
      <div className="form-group">
        <input 
          type="text" 
          ref='newChatInput'  placeholder="Compose Message" 
          className="form-control" 
          onKeyDown={this.handleSubmit} />
      </div>
    )
  }
});
module.exports = AddChat;
```

###Step 3: ChatList Component

The purpose of this component is to receive a URL from its parent as a ```url``` property, consistently make ```GET``` requests to fetch the data at the given URL to update its own internal state, and then render an unordered list of all the items.

* Set the initial state of this component to be a ```chats``` property whose value is an empty array.
* Verify that the ```url``` from props was passed in and it's a string.
* If no ```url``` was passed in set the default url to ```https://api.parse.com/1/classes/chat```
* Create a getChats method that uses jQuery's ```$.ajax``` to make a GET request to the url which was passed in and on success, sets the current ```chats``` state to the data we received from the request.

Once finished, your getChats method should look similar to this.
```javascript
getChats: function(){
  $.ajax({
    url: this.props.url,
    type: 'GET',
    beforeSend: function(request) {
      request.setRequestHeader("X-Parse-Application-Id", 'YOUR-PARSE-APP-ID');
      request.setRequestHeader("X-Parse-REST-API-Key", 'YOUR-PARSE-API-KEY');
      request.setRequestHeader("Content-Type", 'application/json');
    },
    error: function(data) {
      console.log('There was an error in getting the chats');
    },
    success: function(data) {
      if (this.isMounted()) {
        this.setState({
          chats: data.results
        });
      }
    }.bind(this)
  })
}
```
A few things to note. Inside our success callback we're using ```this.isMounted```. The reason for this is because "when processing the response of an asynchronous request, be sure to check that the component is still mounted before updating its state by using this.isMounted()." [Source](http://facebook.github.io/react/tips/initial-ajax.html)

Now once our component mounts, we want to have our component invoke our ```getChats``` method every second so our ```chats``` state gets updated if there are new chats. 

* Inside ```componentDidMount``` use ```setInterval``` to make it so every second our ```getChats``` method is invoked. *Hint: We need a way to cancel our interval when the component unmounts. We can do this by saving the result of our setInterval invocation to a property on ```this``` so we can then clear the interval in ```componentDidUnmount```*
  * It will look like this
  ```javascript
  componentDidMount: function(){
    this.interval = setInterval(function(){
      this.getChats();
    }.bind(this), 1000)
  }
  ```
* Now when the component unmounts, use ```clearInterval``` (built into JavaScript) to clear the interval we created earlier. 

The code should look like this,
```javascript
  componentWillUnmount: function() {
    clearInterval(this.interval);
  }
```

* Now inside the render method create a ```list``` variable that is the result of mapping over ```chats``` and is a collection of ```<li>``` elements with the following properties
 - class of ```list-group-item```
 - key of ```item.objectId``` if item is the first parameter in your map callback
 - inside the ```<li>``` you'll output ```item.text``` 

* Once you have your ```list``` variable which is an array of ```<li>``` tags, display those between your ```<ul></ul>``` tags. 

Once you finish, your ```ChatList.js``` file should look like this.

```javascript
var React = require('react');
var $ = require('jquery');

var ChatList = React.createClass({
  getInitialState: function(){
    return {
      chats: []
    }
  },
  propTypes: {
    url: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      url: 'https://api.parse.com/1/classes/chat'
    };
  },
  getChats: function(){
    $.ajax({
      url: this.props.url,
      type: 'GET',
      beforeSend: function(request) {
        request.setRequestHeader("X-Parse-Application-Id", 'YOUR-PARSE-APP-ID');
        request.setRequestHeader("X-Parse-REST-API-Key", 'YOUR-PARSE-API-KEY');
        request.setRequestHeader("Content-Type", 'application/json');
      },
      error: function(data) {
        console.log('There was an error in getting the chats');
      },
      success: function(data) {
        if (this.isMounted()) {
          this.setState({
            chats: data.results
          });
        }
      }.bind(this)
    })
  },
  componentDidMount: function() {
    this.interval = setInterval(function(){
      this.getChats();
    }.bind(this), 1000)
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function(){
    var list = this.state.chats.map(function(item, index){
       return <li className="list-group-item" key={item.objectId}> {item.text} </li>
     });
    return (
      <ul className="list-group">
        {list}
      </ul>
    )
  }
});

module.exports = ChatList;
```

Now that our ```AddChat``` and ```ChatList``` components are complete, the chatroom should be working.
