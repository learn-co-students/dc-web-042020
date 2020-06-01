// console.log(document.querySelector("tbody"))
// //What if we move the script tag in index.html...
// let cohort = "Cheeky Gits"
// //when the user submits the form => manipulate the DOM to have a new row
//
// //whe want to create a new <tr> as a child of the <tbody> with 3 <td> children
//
function addInstructor(firstName, lastName, email){
  /*
  <tr id="row-2">
    <td class="firstName">Paul</td>
    <td class="lastName">Nicholsen</td>
    <td class="email">paul.nicholsen@flatironschool.com</td>
  </tr>  and add it to my tbody
  */
  var htmlString = `<tr>
          <td class="firstName">${firstName}</td>
          <td class="lastName">${lastName}</td>
          <td class="email">${email}</td>
        </tr>`
  var tbody = document.querySelector("tbody")
  tbody.innerHTML += htmlString
}

//
// //write a function that adds a new intructor row to the table
// function addInstructor(firstName, lastName, email){
//   console.log("adding instructor...")
//   //write code to add a new row
//   /*
//     <tbody>
//       <tr>
//         <td> x3
//   */
//   let trElement = document.createElement("tr")
//   //create row element
//
//   let tbodyEl = document.querySelector("tbody")
//
//   //create the col elements here
//   td1 = document.createElement("td")
//   td2 = document.createElement("td")
//   td3 = document.createElement("td")
//
//   //updating the columns here
//   td1.innerText = firstName
//   td2.innerText = lastName
//   td3.innerText = email
//   td1.className = "firstName"
//   td2.className = "lastName"
//   td3.className = "email"
//
//   //adding everything to the DOM
//   trElement.append(td1, td2, td3)
//   tbodyEl.appendChild(trElement)
//   tbodyEl.appendChild(trElement)
// }
//
//

//Pass by ref vs value
// let a = {num: 4}
//
//
// function double(x){
//   console.log("x:", x) //x = {num: 4}
//   x.num = x.num * 2    //x = {num: 8}
//   return x
// }
//
// // let a = 4
// //
// // function double(x){return x*2}
//
// let b = double(a)
//
// console.log("b:", b)
// console.log("a:", a)
//



//
