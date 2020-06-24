import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilterType = (e) => {
    let type = e.target.value
    this.setState({filters: {type: type}})
  }

  getPets = () => {
    let type = this.state.filters.type
    let url = "/api/pets"
    if (type !== "all") {url += `?type=${type}`}

    fetch(url)
    .then(r => r.json())
    .then(pets => this.setState({pets: pets}))
  }

  adoptPet = (id) => {
    let newPets = this.state.pets.map(pet => {
      if (pet.id === id) {pet.isAdopted = true}
      return pet
    })
    this.setState({pets: newPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeType={this.changeFilterType} getPets={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
