## AJAX, Promises, and Fetch (Communicating with APIs)
- APIs review
- What is AJAX? Async JavaScript (and XML)
- What is blocking (synchronous) vs non-blocking code (asynchronous)?

## Why would we want server communication to be asynchronous?
- asynchronous: code that doesn't block other code

### Welcome Fetch: the non blocking way to communicate with servers
- Built into JS
- Get JSON data
- Returns a promise object
- Practice with:  https://animal-farm-api.herokuapp.com/animals

  - Goal: make a webpage that requests animal data
     from an API and renders that data on the DOM

### Promises and what are they
- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Practice with: http://localhost:3000/hello/1
- pending
- fulfilled (resolved/rejected)
- How to unwrap a promise using `.then`
- At Flatiron, we will work with promises via Fetch rather than creating our own Promises

### Promise chaining
- `.then().then()`
- Easier to read, easier to manage


#### Annoucements
- homework
- check ins
