# React Component Lifecycle
- For class components that extend React.Component

## Available Methods
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## Task Lister
- Components and Hierarchy
```
App *state
 |- Form
 |- TaskList
    |- Task *state
    |- Task *state
    |- Task *state
```
## Lifecycle Methods only for class components
- Virtual DOM

- if child updates != parent will update
- if parent updates (state change) => child to be updated as well



### Creation
- `componentDidMount()`
 - fetch
 - add extra event listeners
 - set up timers
 - things that require the DOM

#### Setting Initial State using Props

### Update
- `render()`
 - has a return value
 - don't update state here
- `componentDidUpdate()`
 - fetch maybe?

### Deletion
 - `componentWillUnmount()`
  - called right before element is removed from DOM
  - clean up things from componentDidMount

#### Where to put fetch?
- ComponentDidMount
- ComponentDidUpdate
- Event handlers

### React Hooks?


### Documentation
- https://reactjs.org/docs/react-component.html


### Less used methods
- `shouldComponentUpdate()`
- `getDerivedStateFromProps()`
- `getSnapshotBeforeUpdate()`

### Deprecated Methods
- `componentWillMount()`
- `componentWillReceiveProps()`
- `componentWillUpdate()`
