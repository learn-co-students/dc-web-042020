//When a user submits the form => then add a new row
//when the form is submitted
document.addEventListener("DOMContentLoaded", function(){
	console.log("Dom is loaded")
	let form = document.querySelector("form")
	form.addEventListener("submit", handleSubmit)

	document.querySelector("#row-1").addEventListener("click", handleClick)
	document.querySelector("#row-2").addEventListener("click", handleClick)
	document.querySelector("#row-3").addEventListener("click", handleClick)
})

function handleClick(event){
	console.log(event.target.innerText)
}

function handleSubmit(e){
	console.log(e)
	//prevent the default behavior of this submit event
	e.preventDefault()
	//now we want to add a new row to our table

	let firstName = document.querySelector("#firstNameInput").value
	let lastName = document.querySelector("#lastNameInput").value
	let email = document.querySelector("#emailInput").value
	addInstructor(firstName, lastName, email)
}

function addInstructor(firstName, lastName, email){
  var trElement = document.createElement("tr")
  var tBodyEl = document.querySelector("tbody")
	trElement.addEventListener("click", handleClick)

  tBodyEl.appendChild(trElement)

  var firstNameEl = document.createElement("td")//creating the <td>
  firstNameEl.innerText = firstName

  var lastNameEl = document.createElement("td")//creating the <td>
  lastNameEl.innerText = lastName

  var emailEl = document.createElement("td")//creating the <td>
  emailEl.innerText = email

  trElement.append(firstNameEl, lastNameEl, emailEl)
}


// function addInstructor(firstName, lastName, email){
//   var tBodyEl = document.querySelector("tbody")
//   tBodyEl.innerHTML += `<tr>
//     <td class="firstName">${firstName}</td>
//     <td class="lastName">${lastName}</td>
//     <td class="email">${email}</td>
//   </tr>`
// }












// document.addEventListener("click", action)
//
// function action (thing){
// 	//thing parameter IS the event object
// 	//do something
// }

/*
pseudocode

function addEventListener(eventString, callbackFunction){
	//do stuff
	//let event = ??????
	callbackFunction(event)
}

*/











//
