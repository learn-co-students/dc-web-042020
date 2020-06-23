import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Header from '../component/Header'
import DisplayPainting from '../component/DisplayPainting'
import Searchbar from '../component/Searchbar'

//when search bard changes => update state => update the DOM

class App extends Component {

  constructor(){
    super()
    this.state = {
      currentPainting: null,
      searchField: ""
    }
  }

  //state changing callback method
  changeState = (painting) => {
    this.setState({currentPainting: painting})
  }

  //we can only change the state of searchField In this App class
  changeSearchField = (event) => {
    // console.log(event.target.value)
    // console.log("what is this?", this)
    this.setState({searchField: event.target.value})
  }

  render() {

    return (
      <div className="App">
        <Header/>
        <Searchbar handleChange={this.changeSearchField}/>
        {
          this.state.currentPainting
            ?
          <DisplayPainting painting={this.state.currentPainting}/>
            :
          null
        }
        <PaintingsContainer
          searchField={this.state.searchField}
          handleClick={this.changeState}
        />
      </div>
    );
  }
}

export default App;
