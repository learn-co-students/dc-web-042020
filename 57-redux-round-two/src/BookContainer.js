import React from 'react';
import { connect } from 'react-redux';

import Book from './Book';

function BookContainer({ books }) {
  return (
    <div className="BookContainer">
      {books.map(book => <Book key={book.id} book={book} />)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    books: state.results
  }
}

export default connect(mapStateToProps)(BookContainer);
