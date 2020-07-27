import React from 'react';

function BookSearch(props) {
  return (
    <form onSubmit={props.searchBooks}>
      <input type="search" name="query"/>
    </form>
  );
}

export default BookSearch;
