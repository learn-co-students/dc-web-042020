# Single Page Applications

### Building out the frontend (Deliverables)
- As a user:
  - should see all my pokmon!
  - I want to be able to create a pokemon by filling out the form
  - I want to be able to delete a pokemon by clicking on its card

### Applying the 3 pillars of web dev
- When <some event> happens, I want to make a <what kind of> fetch call, and manipulate the DOM <how?>


- When HTML loads, make a GET fetch to /pokemon, manipulate the DOM by showing all the pokemon on the page

- When the form is submitted, make a POST fetch to /pokmon, manipulate the DOM by adding a new div to the DOM

- When click of a pokemon div, make a DELETE fetch to /pokemon/id, manipulate the DOM by removing the pokemon node


### Mocking your own backend
```
json-server --watch db.json
```

### JSON Server Routes
```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```
To POST a new Pokemon:
```
body: JSON.stringify({
  "name": "charmeleon",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
})
```

### Notes:
- [Documentation of using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- `body` of a fetch HAS to be a string!!
