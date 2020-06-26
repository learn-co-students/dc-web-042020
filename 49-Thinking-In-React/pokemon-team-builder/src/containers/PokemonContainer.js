import React from 'react'
import PokemonCard from '../components/PokemonCard'

class PokemonContainer extends React.Component{
  render(){
    console.log("PokemonContainer props:", this.props.handleChangeTeam)
    // debugger
    return (
      <div>
        <h3>{this.props.label}:</h3>
        {
          this.props.pokemonList.map(monster => <PokemonCard
            key={monster.name}
            pokemon={monster}
            handleStats={this.props.handleStats}
            handleChangeTeam={this.props.handleChangeTeam}
          />)
        }
      </div>
    )
  }
}

export default PokemonContainer
