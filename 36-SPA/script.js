//When HTML loads, make a GET fetch to /pokemon ,
//manipulate the DOM by showing all the pokemon on the page

//When the form is submitted, make a POST fetch to /pokmon,
//manipulate the DOM by adding a new div to the DOM

//When click of a pokemon div, make a DELETE fetch to /pokemon/id,
//manipulate the DOM by removing the pokemon node

document.addEventListener("DOMContentLoaded", function(){
  gottaFetchEmAll()
  document.querySelector("form").addEventListener("submit", handleSubmit)
});

function handleSubmit(event){
  event.preventDefault()
  postPokemon()
}

function postPokemon(){
  let newPokemon = {
    name: document.querySelector("#name-input").value,
    sprite: document.querySelector("#sprite-input").value
  }
  fetch("http://localhost:3000/pokemon/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPokemon)
  })
  .then(res => res.json())
  .then(createdPokemon => {
    // console.log(createdPokemon)
    renderOnePokemon(createdPokemon)
  })
}
//client -> request -> routes -> controller -> action -> DB

function gottaFetchEmAll(){
  fetch("http://localhost:3000/pokemon/")
  .then(res => res.json() )
  .then(pokeArray => {
    //pokeArray is our array of pokemons
    //iterate through it, and for each pokemon
    //render it to the DOM
    pokeArray.forEach( (pokemon)=>{renderOnePokemon(pokemon)} )

    // pokeArray.forEach( renderOnePokemon )

    //.forEach(p => {console.log(p) })
    //forEach takes a function: has a param, does something with param

    //.then(console.log)
    //.then( (param) => {does something with the param } )
  })
}

function renderOnePokemon(poke){
  // console.log("attempting to render pokemon to DOM")
  let container = document.querySelector("#pokemon-container")
  let pokeDiv = document.createElement("div")
  pokeDiv.addEventListener("click", deletePokemon)
  let header = document.createElement("h2")
  let image = document.createElement("img")
  image.src = poke.sprite
  header.innerText = poke.name
  pokeDiv.className = "card"
  pokeDiv.append(header, image)
  container.appendChild(pokeDiv)
  pokeDiv.id = "pokemon-" + poke.id
}

function deletePokemon(event){
  //know the id of the clicked pokemon???
  console.log(event.currentTarget.id)
  let id = event.currentTarget.id.split("-")[1]

  //optimistic render

  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(data => {
    //pessimistic render
      document.querySelector(`#pokemon-${id}`).remove()
  })
  .catch(() => {
    alert("server is down... nothing was saved... lol")
  })

  //optimistic render
  // document.querySelector(`#pokemon-${id}`).remove()


}











//
