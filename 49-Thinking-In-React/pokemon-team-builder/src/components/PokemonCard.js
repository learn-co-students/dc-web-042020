import React from 'react'

const PokemonCard = (props) => {
  // console.log("PokemonCard props:", props)
  return (
    <div className="pokemon card">
      <div onClick={() => props.handleChangeTeam(props.pokemon)} className="pokemon-name"> {props.pokemon.name} </div>
      <div onClick={(event) => props.handleStats(props.pokemon.url)}>View Stats</div>
    </div>
  )
}

export default PokemonCard
