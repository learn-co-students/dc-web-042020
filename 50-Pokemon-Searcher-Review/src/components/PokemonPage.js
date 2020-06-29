import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {pokemon: [], searchText: ""}

  componentDidMount() {
    this.getPokemon()
  }

  getPokemon = () => {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokemonData => this.setState({pokemon: pokemonData}))
  }

  changeSearch = (e) => {
    let searchText = e.target.value
    this.setState({searchText: searchText})
  }

  filterPokemon = () => {
    let {pokemon, searchText} = this.state
    return pokemon.filter(p => p.name.includes(searchText))
  }

  addPokemon = (pokemon) => {
    let newPokemon = [pokemon, ...this.state.pokemon]
    this.setState({pokemon: newPokemon})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search changeSearch={this.changeSearch}/>
        <br />
        <PokemonCollection pokemon={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
