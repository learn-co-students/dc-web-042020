import React from 'react';

function Book({ title, addToMyBooks }) {
  return (
    <div onClick={addToMyBooks}>
      {title}
    </div>
  );
}

export default Book;
