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

