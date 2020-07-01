import React from 'react'
import {Link} from 'react-router-dom'

const Painting = ({painting, onSelectPainting}) => {
  //let {painting, onSelectPainting} = props
  return(
    <div className="ui card">
      <div>
        <img src={painting.image} alt={painting.title}/>
        <div>
          {painting.title}
        </div>
      </div>
      <Link to={`/paintings/${painting.id}`}>
        <button>More Info</button>
      </Link>
    </div>
  )
}

export default Painting
