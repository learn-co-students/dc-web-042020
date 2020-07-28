import React from 'react';
import { connect } from 'react-redux';
import { SEARCH_BOOKS } from './state/actions'
import { searchBooksSync, searchBooksThunk } from './state/actionCreators'

function BookSearch(props) {
  const handleSubmit = e => {
    e.preventDefault()
    props.searchBooksThunk(e.target.query.value)
  }

  return (
    <form onSubmit={handleSubmit} className="BookSearch">
      <input type="search" name="query"/>
      <input type="submit" value="Search!" />
    </form>
  );
}

// function mapDispatchToProps(dispatch) {
//   return {
//     searchBooks: (e) => {
//       e.preventDefault()
//
//       const query = e.target.query.value
//
//       fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
//         .then(resp => resp.json())
//         .then(data => {
//           dispatch(searchBooksSync(data.items))
//         })
//     }
//   }
// }

// export default connect(null, { searchBooks })(BookSearch);
export default connect(null, { searchBooksThunk: searchBooksThunk })(BookSearch)
