import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import CardContainer from './CardContainer'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header color="red" name="Cheeky Gits"/>
        <CardContainer />
      </div>
    );
  }
}

export default App;
