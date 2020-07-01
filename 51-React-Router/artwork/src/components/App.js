import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'
import About from './About'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintingsList: [],
        searchTerm: ''
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(json => {
      this.setState({paintingsList: json})
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <NavBar title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>

        <Switch>
          <Route exact path="/paintings" render={() =>
            <PaintingsList
              onSearchHandler={this.onSearchHandler}
              filterTerm={this.state.searchTerm}
              paintings={this.state.paintingsList}
              onSelectPainting={this.onSelectPainting}
            />}/>

            <Route path="/paintings/:id" render={(props) => {
              let selectedPaintingId = props.match.params.id
              let found = this.state.paintingsList.find(p => p.id === selectedPaintingId)
              return <PaintingDetails painting={found}/>
            }}/>

          <Route component={About} />
        </Switch>

      </div>
    );
  }
}
/*
In App:
<Route path="/paintings" component={PaintingContainer}>

In PaintingContainer:
<Switch>
  route /paintings/new => ???
  route /paintings/:id =>
  route /paintings => another things
</Switch>

*/

export default App;
