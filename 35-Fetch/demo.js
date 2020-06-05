query = "aww"
url = `https://www.reddit.com/r/${query}.json`
// url = "http://localhost:3000/hello/1"

document.addEventListener("DOMContentLoaded", ()=>{
  fetch(url).then(res => res.json()).then(obj => {
      for(let i = 0; i < 5; i++){
        let li = document.createElement("li")
        li.innerText = obj.data.children[i].data.title
        // li.innerText = obj.results.message
        document.querySelector(".container").append(li)
      }
      let header = document.createElement("h1")
      header.innerText = "Welcome to our awesome app!"

      let paragraph = document.createElement("p")
      paragraph.innerText = `This app shows you the first few posts of Reddit's ${query} subreddit`
      document.body.prepend(paragraph)
      document.body.prepend(header)
    })
    // alert("getting data from api")


})
