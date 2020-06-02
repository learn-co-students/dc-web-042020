console.log('hello world')
// console.log(cerealData)

let namesArray = cerealData.map(thing => thing.name)
//["Bran Chex", "FrostedFlakes", etc]

// console.log(namesArray)

//only the cereals mfr == "K" made by Kellogs
let filteredArray = cerealData.filter( x => x.mfr === "K" )

let returnValue = cerealData.forEach( (cereal)=>{
    document.querySelector("ul").innerHTML += cereal.name
})

console.log(cerealData)
/*
def name (thing1, thing2)
  #do some logic based on thing1 and thing2 and/or return value
end
*/


//multiples a number by 2
// console.log(timesTwo(3))
// function timesTwo(num){
//   return num * 2
// }
//
// //funciton are treated like regular objects
// //var = {}
// //var = function
// var timesThree = function (num){
//   return num * 3
// }
//
// //var = function
// var timesFour = num => {
//   var newNum = num * 4;
//   return newNum
// }
// //if 1 param, then () is optional
//
// //why is funcitons as an object such a big deal???
// function example(data, process){
//   //do something base on data and process
// }














//student is a string, process is a function
function orientation(student, process){
  console.log(`Welcome ${student}, to Flatiron`)
  process()
  console.log(`this concludes orientation`)
}

function inPerson(){
  console.log("Here is your wekwork key card")
}

function online(){
  console.log("Here are tips on how to use Zoom")
}
//
// //string, function
orientation("Shannon", inPerson)
// orientation("Chine", online)










var timesTwo = function (x){return x * 2}

let arr = [1, 2, -3, -4]
//.map TAKES IN A FUNCTION

// newArray = arr.map(x => x * 2)
// arr.map{|x| x*2 }
newArray = arr.filter(value => value < 0)
// console.log(newArray)



//returns a new array
//the results of whatever our logic is
// function map(array, logic){
//   let newArray = []
//   //have to iteratate or loop through the OG array
//   //run logic on each element that we visit
//   for(var i = 0; i<array.length; i++){
//     newArray.push(logic(array[i]))
//   }
//   return newArray
// }
//
// //map is going to take in an array and a function
// let array = [1, 2, 3, 4]
// let mappedArray = map([1, 2, 3, 4], negative )
// console.log(mappedArray)
