function taskForm() {
  return document.querySelector("#create-task-form")
}

function taskList() {
  return document.querySelector("#tasks")
}

document.addEventListener("DOMContentLoaded", () => {
  taskForm().addEventListener("submit", handleSubmit)
  taskList().addEventListener("click", handleListClick)
})

function handleSubmit(e) {
  let taskText = e.target.newTaskDescription.value
  let priority = e.target.priority.value

  e.preventDefault()
  e.target.reset()
  listTask(taskText, priority)
}

function handleListClick(e) {
  if (e.target.nodeName === "LI") {
    let task = e.target.textContent
    e.target.textContent = ''

    let form = document.createElement('form')
    let input = document.createElement('input')
    input.value = task
    form.appendChild(input)
    form.addEventListener("submit", handleEditSubmit)
    e.target.appendChild(form)
  }
}

function handleEditSubmit(e) {
  let newTask = e.target.firstChild.value
  let li = e.target.parentElement
  e.target.remove()
  li.innerText = newTask
}

function listTask(text, priority) {
  let li = document.createElement('li')
  li.textContent = text
  li.className = priority

  taskList().appendChild(li)
}
