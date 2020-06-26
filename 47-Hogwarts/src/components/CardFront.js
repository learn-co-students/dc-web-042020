import React from 'react'

const CardFront = (props) => {
  let pigImage = require(`../hog-imgs/${props.pig.name.toLowerCase().replace(/ /g,"_")}.jpg`)
  return (
    <div>
      <div>{props.pig.name}</div>
      <img src={pigImage}/>
    </div>
  )
}

export default CardFront
