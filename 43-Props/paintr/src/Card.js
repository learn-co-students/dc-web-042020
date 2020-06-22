import React from 'react'

//functional components, return some JSX
const Card = (props) => {
  console.log(props.paintingObj)
  // let {title, image, artist: {name}, dimensions: {height, width}} = props.paintingObj
  // debugger
  return (
    <div className="ui card">
    	<div>
    		<img src={props.paintingObj.image}/>
    	</div>
    	<p>{props.paintingObj.title} by {props.paintingObj.artist.name}</p>
    	<p>Height: {props.paintingObj.dimensions.height} x Width: {props.paintingObj.dimensions.width}</p>
    </div>
  )
}
//class => this.props
//function => props as the arg

export default Card
