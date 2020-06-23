import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintingsData from '../data/paintings'

class PaintingsContainer extends Component{

  //.map creates an array of <Painting />
  //[<Painting/>, <Painting/>, <Painting/>]
  render(){
    return (
      <div>
        {
          paintingsData.map(painting =>
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
