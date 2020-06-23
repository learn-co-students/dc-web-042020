import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Header from '../component/Header'
import DisplayPainting from '../component/DisplayPainting'

//when a user clicks a Painting => change the
//state, React is going to use that state to change DOM

class App extends Component {

  constructor(){
    super()
    this.state = {
      currentPainting: null
    }
    // this.changeState = this.changeState.bind(this)
  }

  //state changing callback method
  changeState = (painting) => {
    //only update and get state inside this instance method
    console.log("attempting to change the state in App", painting)
    this.setState({currentPainting: painting})
    //setState IS ASYNC
    //some code here; state will not be updated yet
    //debugger
  }

  render() {
    // debugger
    return (
      <div className="App">
        <Header/>
        { this.state.currentPainting ? <DisplayPainting painting={this.state.currentPainting}/> : null }
        <PaintingsContainer handleClick={this.changeState}/>
      </div>
    );
  }
}

export default App;
