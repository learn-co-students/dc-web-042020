let addToy = false;

class Toy {
  constructor(name, id, likeCount, imageUrl){
    this.name = name
    this.id = id
    this.likeCount = likeCount
    this.imageUrl = imageUrl
  }

  play(){
    console.log(`Hi, my name is ${this.name}. Play with me!`)
  }

  //IDEA: woody.like(), update my back end and front ends likes
  like = () => {
    // debugger
    // this.likeCount = this.likeCount + 1
    fetch(`http://localhost:3000/toys/${this.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        likes: this.likeCount + 1
      })
    }).then((res) => res.json())
    .then(data => {
      this.likeCount = data.likes
    })

  }

  //IDEA: woody.render()
  //to return something that I can append to #toy-collection
  render(){
    let div = document.createElement("div")
    div.className = "card"

    div.innerHTML = `
      <h2>${this.name}</h2>
      <img src="${this.imageUrl}" class="toy-avatar" />
      <p id="toy-${this.id}">${this.likeCount} Likes </p>
      <button class="like-btn">Like <3</button>
      `

    div.querySelector("button").addEventListener("click", this.like )
    return div
  }
}

var woody = new Toy("Cowboy Woody", 1, 0, "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png")
var buzz = new Toy("Buzz Lightyear", 2, 0, "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png")
var potato = new Toy("POTATOES", 3, 100, "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217")

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#toy-collection").append(
    woody.render(),
    buzz.render(),
    potato.render()
  )


  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
