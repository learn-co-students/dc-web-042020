import React from 'react';
import { connect } from 'react-redux';

import BookSearch from './BookSearch'
import BookContainer from './BookContainer'
import MyBooks from './MyBooks'

import './app.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BookSearch />
        <BookContainer />
        <MyBooks />
      </div>
    );
  }
}


export default App;
