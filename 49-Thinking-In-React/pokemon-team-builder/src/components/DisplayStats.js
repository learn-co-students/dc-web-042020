import React from 'react'

const DisplayStats = (props) => {
  // console.log("DisplayStats props:", props)
  // debugger
  return (
    <div className="card details">
      <div>
        <div className="row">{props.info.name}</div>
        <div className="row">
          <div><img alt="" src={props.info.sprites.front_default} /></div>
          {
            props.info.stats.map(data => {
              return <div key={data.stat.name} className="block">{data.stat.name}: {data.base_stat}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}

//set up default props here

export default DisplayStats
