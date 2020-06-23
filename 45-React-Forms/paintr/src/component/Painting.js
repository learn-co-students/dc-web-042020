import React from 'react'

//Presentationl components => super simple, have very littel logic, take in props, and display them
const Painting = (props) => {
  let {paintingObj: {title, artist: {name}}} = props
  //if state.searchField, then maybe return the div 
  return (
    <div className="ui card" onClick={ (e) => props.handleClick(props.paintingObj) }  >
      <p>{`${title} by ${name}`}</p>
    </div>
  )
}


export default Painting
