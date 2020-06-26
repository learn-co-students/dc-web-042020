import React, { Component, Fragment } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import FilterSort from './FilterSort'
import HogsContainer from './HogsContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      showGreased: false, //false, we want to show all pigs
      sortBy: "name"
    }
  }

  // debugger
  // console.log("attempt to change the sortBy state ")
  handleDropDown = (event) => {
    this.setState({sortBy: event.target.value})
  }

  // console.log("hit this code", event.target.value)
  // debugger
  handleGreased = (event) => {
    this.setState({showGreased: Boolean(event.target.value)})
    //if ann, change the state to something, else change the state to another thing
  }

  getFilteredHogs(){
    if(this.state.showGreased){
      return hogs.filter(hog => hog.greased)
    }else {
      return hogs
    }
  }

  sortHogs(array){
    if(this.state.sortBy === "name"){
      return array.sort( (hog1, hog2) => hog1.name.localeCompare(hog2.name) )
    }else if(this.state.sortBy === "weight"){
      return array.sort( (hog1, hog2) => hog1.weight - hog2.weight)
    }
  }

  render() {
    //if the state of showGreased false use hog, else, hogs.filter
    let displayHogs = this.getFilteredHogs()
    let sortedArray = this.sortHogs(displayHogs)
    console.log("what is displayHogs:", displayHogs)
    return (
      <div>
        <Nav />
        <FilterSort
          handleDropDown={this.handleDropDown}
          handleGreased={this.handleGreased}
          showGreased={this.state.showGreased}
        />
        <HogsContainer piggys={sortedArray}/>
      </div>
    );
  }
}

export default App;

//when user change drop down => change state => DOM is render

/*
App c
  Navbar p
  FilterSort p
  HogContainer c
    Hog p
    Hog
    Hog
*/
