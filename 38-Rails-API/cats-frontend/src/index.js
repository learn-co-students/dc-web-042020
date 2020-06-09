document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM is loaded')
  getHobbies()
  getCats()
  document.querySelector("form").addEventListener("submit", handleSubmit)
})

function handleSubmit(e){
  e.preventDefault()
  //grab data from the form
  let name = document.querySelector("#name-input").value
  let image = document.querySelector("#image-input").value
  let floof = document.querySelector("#floof-input").value
  postCat(name, image, floof)
}

function postCat(name, image, floofiness){
  console.log(name, image, floofiness)
  fetch("http://localhost:3000/cats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: name,
      picture: image,
      floofiness: floofiness
    })
  }).then(res => res.json())
  .then(json => {renderCat(json)})
}

function getHobbies(){
  fetch("http://localhost:3000/hobbies")
  .then(res => res.json())
  .then(data => {
    data.forEach(hobby => {renderHobby(hobby)})
  })
}

function renderHobby(hobby){
  let container = document.querySelector("#hobbies")
  let li = document.createElement("li")
  container.append(li)
  li.innerText = `${hobby.name}: ${hobby.description}`
}

function getCats(){
  fetch("http://localhost:3000/cats")
  .then(res => res.json())
  .then(data => {
    data.forEach(cat => {renderCat(cat)})
  })
}

function renderCat(cat){
  console.log(cat)
  // debugger
  let container = document.querySelector("#cats-container")
  let catDiv = document.createElement("div")
  container.append(catDiv)
  catDiv.innerText = cat.name
  catDiv.className = "ui card"
  catDiv.innerHTML = `<div class="image">
    <img src="${cat.picture}">
  </div>
  <div class="content">
    <a class="header">${cat.name}</a>
    <div class="description">
    Floofiness ${cat.floofiness}
    </div>
  </div>
  <div class="extra content">

  </div>`
  // debugger
  cat.hobbies.forEach(hobby => {
    let content = catDiv.querySelector(".extra.content")
    let li = document.createElement("li")
    li.innerText = hobby.name
    // debugger
    content.append(li)
  })

  //node.innerHTML
}
