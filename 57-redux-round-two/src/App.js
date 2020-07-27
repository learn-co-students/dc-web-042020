import React from 'react';
import { connect } from 'react-redux';

import BookSearch from './BookSearch'
import BookContainer from './BookContainer'
import MyBooks from './MyBooks'

import { SAMPLE_ACTION } from './state/actions'

class App extends React.Component {
  state = {
    results: [],
    myBooks: []
  }

  searchBooks = (e) => {
    e.preventDefault()

    const query = e.target.query.value

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          results: data.items
        })
      })
  }

  // addToMyBooks(bookInfo)(e)
  addToMyBooks = (bookInfo) => (e) => {
    this.setState({
      myBooks: [...this.state.myBooks, bookInfo]
    })
  }

  // Currying
  // addToMyBooks(bookInfo) {
  //   return function(e) {
  //     this.setState({
  //       myBooks: [...this.state.myBooks, bookInfo]
  //     })
  //   }
  // }

  render() {
    return (
      <div className="App">
        <button onClick={e => this.props.updateCounter(this.props.counter + 1)}>Value: {this.props.counter}</button>
        <BookSearch searchBooks={this.searchBooks} />
        <BookContainer results={this.state.results} addToMyBooks={this.addToMyBooks} />
        <MyBooks myBooks={this.state.myBooks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCounter: (value) => {
      dispatch({
        type: SAMPLE_ACTION,
        counter: value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
