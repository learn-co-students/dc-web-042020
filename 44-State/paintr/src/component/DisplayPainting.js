import React from 'react'

class DisplayPainting extends React.Component {
  render(){
    console.log("inside DisplayPainting, what are props?", this.props)
    //if this.props.painting is null => dont want to displany anything
    //if this.props.painting is not null => want to show div="ui card"
    // debugger
    return ( this.props.painting === null ? null : (
      <div className="ui card">
        	<div>
        		<img alt="painting" src={this.props.painting.image} />
        	</div>
        	<p>{this.props.painting.title} by {this.props.painting.artist.name}</p>
        	<p>Height: {this.props.painting.dimensions.height} x Width: {this.props.painting.dimensions.width}</p>
        </div>
      )
    )
  }
}

export default DisplayPainting
