import React from 'react'

const Painting = (props) => {
  let {paintingObj: {title, artist: {name}}} = props
  // console.log("inside Painting, what is props?", props)
  // debugger

  return (
    <div className="ui card" onClick={ (e) => props.handleClick(props.paintingObj) }  >
      <p>{`${title} by ${name}`}</p>
    </div>
  )
}


export default Painting
