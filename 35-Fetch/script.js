//every feature you build:
//Event
//fetching
//DOM

document.addEventListener("DOMContentLoaded", function(){
  loadWelcome()
})

function getAnimals(){
  let prom = fetch("https://animal-farm-api.herokuapp.com/animals")
  .then( response => response.json() )
  .then( animalsArray => {
      //do stuff with animalsArray
      for(let i=0; i<animalsArray.length; i++){
        renderOneAnimal(animalsArray[i])
      }
      //render each animal onto my DOM <h3>
  })
}

function renderOneAnimal(animal){
  //this method is going to take in 1 animal and render it on the DOM
  console.log("rendering 1 animal")
  let div = document.createElement("div")
  div.innerText = animal.name
  let ul = document.querySelector("ul")
  ul.appendChild(div)

  let image = document.createElement("img")
  image.src = animal.img
  ul.appendChild(image)

  let p = document.createElement("p")
  p.innerText = animal.species
  ul.appendChild(p)
}


function loadWelcome(){
  let header = document.createElement("h1")
  header.innerText = "Welcome to Animal Farm"
  document.body.append(header)

  let ul = document.createElement("ul")
  document.body.append(ul)
  ul.className = "container"
  let button = document.createElement("button")
  button.innerText = "SHOW ME ANIMALS"
  document.body.append(button)
  button.addEventListener("click", getAnimals)

}
//build out an application that shows us a list of fmar animals
//from this API

//on load of the page,









/*
fetch(url)
.then(res => res.json())
.then(data => { do smoething with that data })
*/
