# Introduction to React

This is an introduction to React from the Facebook React docs.
I've constructed it using my current basic JS stack setup, using Node, nvm,
Webpack (w/dev server), and Babel.

The code is generally from [Facebook React docs](https://facebook.github.io/react/tutorial/tutorial.html), but I've
removed some FUD syntax including excessive semicolons.

## Important React topics which are not covered here:

How to handle state properly in React (see [Hackernoon article](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc))

TODO:
- Why stateless components are better than managing state locally (like this).
- Redux: in React, we want to manage state in parents/containers, and pass that to children through props. We don't want to write code like this repo, where state is being handled in presentational 'child' components.
- `this` is an OO concept and should be avoided in React
- unit testing (Jest)

Amanda
