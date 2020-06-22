# JavaScript as a multi-paradigm language
OO Programming
 - instances => objects types
 - methods => functions
 - self (how to get the instance you are calling)

# The JavaScript this Keyword

## What is this?

The JavaScript `this` keyword refers to the object we are currently "working off of".

It has similarties with the ruby keyword `self`

**`this` has different values depending on where it is used:**

* Alone, `this` refers to the global object.
* In a function, `this` refers to the global object.
* In a method, `this` refers to the owner object.
* In an event, `this` refers to the element that received the event.

We WANT `this` to be equal to an object! But sometimes, `this` is equal to something else...

We can Force the value of `this`


## Explicit Function Binding

`bind()` is a predefined JavaScript method.

This `bind()` method is called off a function object and **returns a new function** where the value of `this` is binded (a predetermined value)
