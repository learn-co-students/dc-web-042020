const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", ()=>{
  fetchTrainers()
})

function fetchTrainers(){
  fetch(TRAINERS_URL)
  .then(res => res.json())
  .then(trainersArray => {
    // trainersArray.forEach( (trainer) => {renderTrainer(trainer)} )
    trainersArray.forEach(renderTrainer)
    //forEach takes in a function
      //that function needs to have the trainer param and do something with it
  })
}

function renderTrainer(trainer){
  let container = document.querySelector("main")
  let div = document.createElement("div")
  div.className = "card"
  div.dataset.id = trainer.id

  let p = document.createElement("p")
  p.innerText = trainer.name

  let button = document.createElement("button")
  button.innerText = "Add Pokemon"
  button.dataset.trainerId = trainer.id
  button.addEventListener("click", (event) => {
    // debugger
    // if(event.target.parentElement.querySelector("ul").children.length < 6){
      handleAdd(event, trainer.id)
    // }
  })

  let ul = document.createElement("ul")

  container.append(div)
  div.append(p, button, ul)
  // debugger
  trainer.pokemons.forEach((pokemon)=>{renderPokemon(pokemon, ul)})

}

function handleAdd(e, trainerId){

  // let trainerId = e.target.dataset.trainerId
  console.log("attempting to add pokemon")
  let options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"trainer_id": trainerId})
  }

  fetch(POKEMONS_URL, options)
  .then(res => res.json())
  .then(newPokemon => {
    // debugger
    if(newPokemon.error){
      alert("Cannot have more than 6 pokemon")
    }else{
      let ul = document.querySelector(`[data-id="${newPokemon.trainer_id}"] ul`)
      renderPokemon(newPokemon, ul)
    }
  })
}

function renderPokemon(poke, ul){
  // debugger
  // console.log("attempting to render pokemon to DOM")
  // debugger
  // let div = document.querySelector(`[data-id='${poke.trainer_id}']`)
  // let ul = div.querySelector("ul")
  // // debugger

  let li = document.createElement("li")
  li.innerText = `${poke.nickname} (${poke.species})`

  let button = document.createElement("button")
  button.className = "release"
  button.innerText = "Release"
  button.dataset.pokemonId = poke.id
  button.addEventListener("click", handleDelete)

  // debugger
  li.append(button)
  ul.append(li)
}

function handleDelete(e){
  // console.log(e.target)
  //manipulate the DOM
  let pokemonId = e.target.dataset.pokemonId
  e.target.parentElement.remove()

  //validation on the front end

  deletePokemon(pokemonId)

}

function deletePokemon(id){
  //in this SCOPE, we need the pokemon's id
  console.log("attempting to make a DELET fetch ")
  // debugger
  fetch(POKEMONS_URL + "/" + id, {
    method: "DELETE"
  })
  .catch((error)=>{
    alert("error with the server:" + error.message)
  })
}


/*
put eventListener on the div

handleClick(){
  if(e.target is a Release button)
   then you would remove it from the DOM
}
*/

/*
<div class="card" data-id="1">
  <p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div>
*/
