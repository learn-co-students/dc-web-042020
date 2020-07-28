import React from 'react';
import {connect} from 'react-redux';

import Book from './Book';

function MyBooks(props) {
  return (
    <div className="MyBooks">
      {props.myBooks.map(book => <Book key={book.id} book={book} />)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myBooks: state.myBooks
  }
}

export default connect(mapStateToProps)(MyBooks);
