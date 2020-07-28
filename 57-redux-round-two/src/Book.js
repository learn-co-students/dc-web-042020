import React from 'react';
import { connect } from 'react-redux';

import { ADD_BOOK } from './state/actions'
import { saveBookSync, saveBookAsync } from './state/actionCreators'


function Book({ book, saveBookAsync }) {
  return (
    <div className="Book" onClick={e => saveBookAsync(book)}>
      {book["volumeInfo"]["title"]}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    saveBook: (book) => (e) => {
      dispatch({
        type: 'ADD_BOOKS',
        book: book
      })
    }
  }
}

// export default connect(null, { saveBook })(Book);
export default connect(null, { saveBookAsync })(Book);
