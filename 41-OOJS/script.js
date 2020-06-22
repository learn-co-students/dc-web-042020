console.log('hello world')

//Goal of creating a Toy class
//create some instances of Toys

class Toy {

  // static all = []

  constructor(a){
    this.name = a
  }

  play(){
    // debugger
    console.log(`Hi, my name is ${this.name}. Play with me!`)
  }

  // static cleanUp(){
  //   console.log("Andy! clean up your toys!")
  // }

}


var woody = new Toy("Cowboy Woody")
var buzz = new Toy("Buzz Lightyear")
// console.log(woody)


//Toy.new("Cowboy Woody") => initialize(name)
