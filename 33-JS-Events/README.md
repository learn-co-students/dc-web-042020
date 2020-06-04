# Event Listeners
## Type of Events
- submit
- click
- hover
- keydown, keyup, keypress
- scroll
- resize
- speechrec
- DOMContentLoaded

## node.addEventListener() on a DOM node
- takes in a string for the type of the event, and a callback function to be invoked when the event happens
- (optional) argument for the callback is the event itself

## When to add an event Listener
- on load of the page (DOMContentLoaded) IF the node exists
- on creation of element?

## Practice
- When submit the form -> add new instructor row
- When click of email -> alert("email sent to <email> ")

## Some events have default behavior
- event.preventDefault()
