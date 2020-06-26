import React, { Component } from 'react';
import '../App.css';
import PokemonContainer from './PokemonContainer'
import DisplayStats from '../components/DisplayStats'

//When page loads, make a GET fetch, I should see all pokemon

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentPokemon: null,
      teamPokemon: [],
      allPokemon: []
    }
  }

  //when componentDidMount, make a get fetch, update allPokemon
  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(res=> res.json())
    .then(data => {
      this.setState({allPokemon: data.results})
    })
  }

  //change the state of currentPokemon
  //write the state changeing function RIGHT HERE
  handleStats = (url) => {
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({currentPokemon: data})
    })
  }

  //state change callback for teamPokemon
  handleAddTeam = (mon) => {
    //whatever team pokemon is, make a copy, we need to add the new pokemon into that array
    if(this.state.teamPokemon.length < 6){
      if(this.state.teamPokemon.includes(mon) ){
        alert("Cannot have duplicates")
      }else{
        this.setState({teamPokemon: [...this.state.teamPokemon, mon]})
      }
    }else{
      alert("Cannot have more than 6 pokemon")
    }
    //fetch to back end for persistance
  }

  handleRemoveTeam = (pokemon) => {
    console.log("attempting to remove pokemon", pokemon)
    //teamPokemon to be a copy of itself but that pokemon taken out
    this.setState({teamPokemon: this.state.teamPokemon.filter(mon => mon !== pokemon) })
  }

  filterForWildPokemon(){
    //we want to keep the pokemon that are not in this.state.teamPokemon
    return this.state.allPokemon.filter(pokemon => !this.state.teamPokemon.includes(pokemon))
  }

  render() {
    let wildPokemon = this.filterForWildPokemon()
    return (
      <div className="App">
        <img alt="Pokemon" width="200"
          src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"
        />
        <PokemonContainer
          label="Team"
          pokemonList={this.state.teamPokemon}
          handleStats={this.handleStats}
          handleChangeTeam={this.handleRemoveTeam}
        />
        {this.state.currentPokemon ? <DisplayStats info={this.state.currentPokemon}/> : null}
        <PokemonContainer
          label="Wild Pokemon"
          pokemonList={wildPokemon}
          handleStats={this.handleStats}
          handleChangeTeam={this.handleAddTeam}
        />
      </div>
    );
  }
}

//click => this.setState => update => render() again

export default App;
