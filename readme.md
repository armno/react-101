# react-101

pulling my hair out with React. following this tutorial http://ryanclark.me/getting-started-with-react/

## setup

```sh
$ npm install
$ bower install
$ gulp
```

## some random notes taken

- a component contains its own "scope". it can have properties and states.
- each component has a `render` method to render itself to the DOM.
- a React component can be created using `React.createClass` function.
- configuration object is an array/object passed in the component's attribute. we can use it inside of the component.
- state: whenever the component's state changes, `render` method is called.
- `render` method is where React does "DOM Magic" (virtual DOM diff & update and all that jazz).
- `getInitialState` returns the default state of the component.
- `state` defines values of component's properties at a time.
- `componentWillMount` is executed once, before `render` method.
- `componentDidMount` is executed once, after `render` method.
- (while `render` method can be executed multiple times)
- `componentWillUnmount` is executed before the component gets destroyed.
- `getDefaultProps` returns component's default properties.
- `propTypes` defines expected configuration object type.
- `mixins` extends some properties/methods from another component.
- everything is declarative, including event handlers.

-Armno, 2015.02.26