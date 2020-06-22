// "use strict"
// function example(){
//   console.log(this)
// }

//this == what object are you current working off of
// window.firstName = "Bob"
// window.lastName = "Window"


function greet(){
  console.log(this)
  console.log(`Hi, I am ${this.firstName} ${this.lastName}`)
}

let paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet
}

var ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}

const shannon = {
  firstName: "Shannon",
  lastName: "Narbors",
  greet: greet
}


// let newFunc = greet.bind(ann)
//ann.greet == paul.greet == greet

document.querySelector("#ann").addEventListener("click", paul.greet.bind(ann) )
document.querySelector("#paul").addEventListener("click", ann.greet.bind(paul) )

//problem is this == event.target
//desired is this == ann object
//solution: we want to BIND the value of this to be our ann object



// document.querySelector("#paul").addEventListener("click", paul.greet)
