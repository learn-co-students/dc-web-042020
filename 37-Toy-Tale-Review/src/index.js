let addToy = false
const url = "http://localhost:3000/toys"
const toyFormContainer = () => document.querySelector(".container")
const toyForm = () => document.querySelector(".add-toy-form")
const addBtn = () => document.querySelector("#new-toy-btn")

document.addEventListener("DOMContentLoaded", () => {
  getToys()
  addBtn().addEventListener("click", toggleFormDisplay)
  toyForm().addEventListener("submit", handleSubmit)
})

function getToys() {
  fetch(url)
  .then(r => r.json())
  .then(toys => {
    toys.forEach(toy => renderToyCard(toy))
  })
}

function toggleFormDisplay() {
  addToy = !addToy
  if (addToy) {
    toyFormContainer().style.display = "block"
  } else {
    toyFormContainer().style.display = "none"
  }
}

function handleSubmit(e) {
  e.preventDefault()
  createToy(e.target.name.value, e.target.image.value)
  e.target.reset()
}

function handleLikeClick(e, id) {
  let likesEl = e.target.nextElementSibling
  let likes = parseInt(likesEl.textContent.split(" ")[0]) + 1
  fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({likes: likes})
  }).then(r => r.json())
  .then(() => {
    likesEl.textContent = `${likes} Likes`
  })
}

function createToy(name, imageUrl) {
  fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: name,
      image: imageUrl,
      likes: 0
    })
  }).then(r => r.json())
  .then(renderToyCard)
}

function renderToyCard(toy) {
  let toyContainer = document.querySelector("#toy-collection")
  let div = document.createElement('div')
  div.className = 'card'

  let heading = document.createElement('h2')
  let img = document.createElement('img')
  let button = document.createElement('button')
  let likes = document.createElement('p')

  heading.textContent = toy.name
  img.src = toy.image
  img.className = "toy-avatar"
  likes.textContent = `${toy.likes} Likes`
  button.textContent = "Like <3"
  button.addEventListener("click", (e) => handleLikeClick(e, toy.id))

  div.append(heading, img, button, likes)

  toyContainer.appendChild(div)
}
