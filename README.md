# REACT BITS

I put this repo together for folks looking to learn React, primarily at
DevMountain but really for anyone else too.

This repo doesn't address learning ES2015 (aka ES6; current JavaScript which you
should be using). I have another repo for that purpose,
[here](https://github.com/zacanger/es6-and-builds).

## READ THIS FIRST

[This. Read this.](https://facebook.github.io/react/docs/thinking-in-react.html)

--------

### Editors

You may want to take a moment to get your editor comfortable with JSX.
* For vim, use your plugin manager to get
  [this](https://github.com/mxw/vim-jsx) and don't forget to set `let
  g:jsx_ext_required = 0` in your .vimrc/init.vim.
* For Atom, `apm install react language-babel`.
* For Sublime Text, search for `Babel` in Package Control.
* For VS Code, `tsd install react-global` or `typings install --ambient react-global`
* In general, switch from using JSHint to ESLint. JSHint doesn't do JSX very
  well. I recommend using the `standard` eslintrc.

--------

### JSX Gotchas

* Don't try to comment your JSX.
* Don't try `if` statements in your JSX.
* All tags must be closed (including void tags like `hr` and `img`).
  * But, all tags can be _self_ closing (eg `<div />`), which is nice.

--------

### Learn Things

* To get started learning React, I _highly_ recommend [this course](http://survivejs.com).
* [This is another very good beginner's course](http://reactjsprogram.teachable.com/courses/reactjsfundamentals).
* [How-To for Beignners](https://github.com/petehunt/react-howto).
* [a short guide on transitioning from angular to react](https://reactjsnews.com/an-angular-developers-first-react-app).
  * [and additional materials on the same](http://angulartoreact.com/).
* [This](https://www.gorkahernandez.com/blog/build-wikipedia-viewer-react-way) is a good **short** first-time React
  project.
* [Here's a book](https://www.fullstackreact.com), plus an awesome very in-depth [Yelp clone tutorial](https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp).
* I have some React-related cheatsheets over
  [here](https://github.com/zacanger/doc.git).
* Webpack is awesome, but it's a huge pain. Really. A giant pain.
  [So consider using this](https://github.com/HenrikJoreteg/hjs-webpack).
* A [Build Your Own (React) Starter Kit](http://andrewhfarmer.com/build-your-own-starter/#0-intro).
* [Full Stack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html).
* [A good bunch of tips](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know) for React beginners.

--------

### DevTools Extensions

* [Show Me The React](https://chrome.google.com/webstore/detail/show-me-the-react/iaebolhfcmodobkanmaahdhnlplncbnd)
* [Official React DevTools Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Official Tools Addon for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

--------

### Some Additional React Resources

* `npm i -g thinking-in-react` is a workshopper (interactive somewhat gamified tutorial in the terminal)
* `npm i -g learnyoureact` is another one of these.
* `npm i -g mern-cli` will get you a MERN (Mongo/Express/React/Node) stack generator
* [lifecycle demo](http://plnkr.co/edit/JrdxRs?p=preview)
* [official react jsfiddle](http://jsfiddle.net/reactjs/69z2wepo/)
* [unofficial react jsbin](http://jsbin.com/yafixat/edit?js,output)
* [so many great demos](https://github.com/BinaryMuse/react-primer)
* [live links to the above demos](http://binarymuse.github.io/react-primer/build/):
  * [components and properties](http://binarymuse.github.io/react-primer/build/index.html?1)
  * [jsx](http://binarymuse.github.io/react-primer/build/index.html?2)
  * [state](http://binarymuse.github.io/react-primer/build/index.html?3)
  * [composition, proptypes, & event handlers](http://binarymuse.github.io/react-primer/build/index.html?4)
  * [mixins](http://binarymuse.github.io/react-primer/build/index.html?5)
  * [top-down data flow & shouldComponentUpdate](http://binarymuse.github.io/react-primer/build/index.html?6)
  * [this.props.children](http://binarymuse.github.io/react-primer/build/index.html?2)
* [Awesome React](https://github.com/enaqx/awesome-react)
* [Awesome React Native](https://github.com/jondot/awesome-react-native)
* [React Modules](https://js.coach/react)
* [Awesome Redux](https://github.com/xgrommx/awesome-redux)
* [React Components List](http://dvemac.github.io/react-component-list/)
* [Built With React](http://builtwithreact.io/)
* [Twitter list of React influencers](https://twitter.com/oguzbilgic/lists/react-influencers)
* [Official create-react-app generator](https://github.com/facebookincubator/create-react-app)
* [List of other good React app generators](https://github.com/facebookincubator/create-react-app#alternatives)
* [Workshop/challenges](https://github.com/jesstelford/react-workshop)
