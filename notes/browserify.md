example:
```javascript
var stuff = 'lol'
  , things = 'nope'

console.log (stuff + ' ' + things)
```

browserify doesn't get configs. you just run it, for example `browserify node_modules -o app/bundle.js`. you can put that shit in your package.json if need be, i guess.

BROWSERIFY PROVIDES REQUIRE FOR THE BROWSER OMGF I GET IT

Why didn't anyone just _say_ that?

`browserify -r ./src/stuff:module-to-map-to > public/bundle.js`

This gives you a long-ass bit of minified code that turns your local 'stuff' into the module 'module-to-map-to', and enables the browser-side equivalent of `require()` with a big-ass function, in that 'bundle.js,' which is GREAT. okay.

