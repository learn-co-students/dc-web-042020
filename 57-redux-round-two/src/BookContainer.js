import React from 'react';

import Book from './Book';

function BookContainer(props) {
  return (
    <div>
      {props.results.map(book => {
        return (<Book title={book["volumeInfo"]["title"]} addToMyBooks={props.addToMyBooks(book)}/>)
      })}
    </div>
  );
}

export default BookContainer;
