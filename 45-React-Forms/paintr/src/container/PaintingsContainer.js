import React, {Component} from 'react'
import Painting from '../component/Painting'
import allPaintings from '../data/paintings'

class PaintingsContainer extends Component{

  //allPaintings is all 100 paintings
  //have access to state.searchField
  //derived containerPaintings is an array of less than 100 paintings

  render(){
    let containerPaintings = allPaintings.filter(
      (painting) => painting.title.toLowerCase().includes(this.props.searchField.toLowerCase()) 
    )
    return (
      <div>
        {
          containerPaintings.map(painting =>
          <Painting
            key={painting.id}
            paintingObj={painting}
            handleClick={this.props.handleClick}
          />)
        }
      </div>
    )
  }
}

export default PaintingsContainer
