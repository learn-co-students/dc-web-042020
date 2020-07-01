## Review on Routes: Back end vs Front end
Front end routing:
 /paintings
 /paintings/:id
 /paitnings/new



### Goal:
Allow the user to navigate our App using
- the url
- using nav menus and buttons and links



### Set Up
- `npm install react-router-dom`

## [React Router](https://reacttraining.com/react-router/web/guides/quick-start)



## What is our Component Hierarchy?

```
App *state
 |- Navbar
 |- About
 |- PaintingDetails
 |- PaintingsList
     |- Searchbar
     |- Painting
     |- Painting
         ...
```

### BrowserRouter
- Will use 1 place in our application (and one place only) at the very top level
- Sometimes aliased

### Route
- Conditionally render a certain component based on if the path of the url matches the path prop
- What if we leave out the path prop?

### Param Routes `/:id`
=> no longer want to rely on state to display the painting
=> assuming we get gotten the paintings

### Link
- Changes the url we see in the browser without a reload, must have a 'to' prop
- Route components will re-render and show components based on new url
- works with the browser's native back and forward controls


### Switch
- Pick one of the following routes (the first that matches) and load that component
- Doesn't look at the others (like an if/ else if/ else if)
- Takes in no props
