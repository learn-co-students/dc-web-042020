//create component using function syntax
import React from 'react'
import Card from './Card'
import paintingsData from './data/paintings'

//paintingsData
/*

[{},{},{},{}] => [<Card/>,<Card/>,<Card/>,<Card/>]

*/

//take data from paintingsData and render <Card />
const CardContainer = () => {
  console.log("data:", paintingsData)
  // debugger
  return (
    <div>
      {
        paintingsData.map( p => <Card paintingObj={p} key={p.id}/> ) 
        //to create an array of [<Cards/>,<Cards/>]
      }
    </div>
  )
}




export default CardContainer
