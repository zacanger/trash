Bacon is a JS lib for FRP, like Rx, but not MS.

Here's some jQuery, because I don't know why.

```javascript
var go = $('#clickMe').asEventStream('click')
go.onValue (
  () => $('#output').append('clicked!'))
```

Is it just me or is this tutorial using _typescript_? Eww, it totally is! Gross.

`scan` combinator is kinda like `reduce`, except async and produces multiple values. So, there's an initial value,
and a function to combine them. Returned stream contains the aggregate.

```javascript
var clicks = $('#example button').asEventStream('click')
  , counter = clicks
      .map(1)
      .scan(0, (x,y) => x + y)
counter.onValue(x => $('#example .output').html(x))
```

Ohh, okay, so the 'take' and 'skip' combinators are new. They do what they sound like. Basically like slicing
arrays, but with streams.
