# Paintr
```
App *STATE, also instance method to access/change state
	|- Header
	|- DisplayPainting => this component should READ the state of currentPainting
	|- PaintingsContainer
			|- Painting  => this component should WRITE to the state of currentPainting
```



## State
- Represents things that change about the DOM (dynamic)
- State is similar to props, but it is private and fully managed by the class component (can't be functional)

Design the state of the application

state = {
	currentPainting: object => represents what users see
}

## Where to Put State?
- Single Source of truth

	- A comment ancestor between all components that 'touch' on this state
	- data can only flow from parent to child, not sibling components

- Set up the state object using this.state in the constructor
	- or outside the constructor


## Informational Flow
- Parent communicates to child by passing props
- How does child communicate with parent?
	- State Changing Callback!!
- Don't modify state directly, use this.setState({})
  - works asynchronously


## Conditional Rendering


## Virtual DOM
- When does the DOM get re-rendered?




#### When <some event> happens?
- I want to change the DOM by manipulating state
 - and state changes will propagate as props to update all components




`<div class="ui card">
	<div>
		<img src="https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg">
	</div>
	<p>Portrait of a Carthusian by Petrus Christus</p>
	<p>Height: 11.5 x Width: 8.5</p>
</div>`
