import React from 'react';

import Book from './Book';

function MyBooks(props) {
  return (
    <div>
      {props.myBooks.map(book => <Book title={book["volumeInfo"]["title"]} />)}
    </div>
  );
}

export default MyBooks;
