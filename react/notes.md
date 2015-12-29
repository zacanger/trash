There's no `if...else` in JSX. Doesn't work. Don't try it (in your JSX).

Don't try `<!doctype>` either. It'll break stuff.

Same with HTML comments. Not worth the trouble, I guess. No one reads them, anyway, so whatever.

Don't try to use your own code style. JSX needs to be written the way the docs say to. Doing React means doing React _their_ way, so screw your purely stylistic preferences, they don't matter anymore. Which, unfortunately, means semicolons everywhere. Gross.

_Every single XML tag needs to be closed_. That means that `<br>` is invalid, but `<br></br>` is... totally valid. Also, self-closing tags (which literally do not even exist in HTML anymore) work just fine, so `<div />` is valid. What the fuck, man.

In JSX, **everything** in `{}` will be evaluated as Javascript. So you can do some things there, if you need to. (But not `if...else`!)

Any JSX over multiple lines needs to be wrapped in parens. If it's single-line, you don't need them.

Evidently it's better to indent all the stuff going in your tags just inside the tag, rather than even with the first whatchamacallit. This is what I mean:
```jsx
<input type="text"
			 value={whatever.stuff}
			 onChange={this.foo.bar} />
```
...is apparently NOT the way to do it. Instead, we want to do:
```jsx
<input
	type="text"
	value={whatever.stuff}
	onChange={this.foo.bar} />
```
which, personally, I find more annoying and _less_ readable, but apparently that's how the React community does, so whatever. Oh, and as to the closing of the tag, no matter what it's gonna be hideous, so I don't know or care whether it should be on a newline. Probably not, because that's just even more lines, but I have seen a lot of this:
```jsx
<input type="text"
	value={whatever.stuff}
	onChange={this.foo.bar}
/>
```
which is really even more annoying, but whatever. Lastly, as far as style goes, I'll just put what would make the most sense to **me**, personally. Note how clean and lined up things are? Yeah. Much better, to my eyes. Still ugly af, though.
```jsx
<input type="text"
		  value={whatever.stuff}
   onChange={this.foo.bar} />
```

--------

Redux:

Actions describe a desired change inside the app. Actions have types. What I'm doing in my example Redux todo app is putting functions in the actions subdirectory, rather than putting them directly in the components; this is because we're not changing the internal state, we're changing the Redux store.

The idea behind immutable is simply what it sounds like: mutable states are not desirable. So instead of making changes to states, immutable returns a new copy for every change. The API of the lib is pretty close to regular Js variable types, which is why we can just ~~push~~ _unshift_ (because we want it on the top, duh) to a list like we would to an array.

The way this little project works is like this:
- component fires an event (adding or removing a task)
- action is dispatched
- if the action is addTodo, task is pushed to the current state, and a new copy is returned
- etc., etc., etc.
- store is updated

... that's all I've got. So far.

With Redux, you will always only have **one** store, and use _reducers_.

The `connect` bit lets you choose which parts of the state you want to give to your component. That's kinda necessary in anything resembling a real app, which would have multiple reducers.

Oh, so what we're doing is handling all state in Redux, and taking it completely out of the actual components. That's sensible, I guess. Hence the term 'state container.'

And actions are just pure functions. so `dispatch(addTodo('test'))` is exactly the same as `dispatch({type: 'addTodo', todo: 'test'})`. (One thing to keep in mind, then, is to never do an AJAX request before returning an action; that would mean a possibly different output, if there was a failure, which would make the function totally not pure at all.)
