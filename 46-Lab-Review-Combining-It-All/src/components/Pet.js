import React from 'react'

class Pet extends React.Component {
  render() {
    let {id, isAdopted, name, type, age, gender, weight} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? '♀' : '♂' }
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
          <button className={isAdopted ? "ui disabled button" : "ui primary button"}
          onClick={() => this.props.adoptPet(id)}
          >Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
