import { SEARCH_BOOKS, ADD_BOOK } from './actions'

export function saveBookSync(book) {
  // want to do anything with your data
  return {
    type: ADD_BOOK,
    book: book
  }
}

export function saveBookAsync(book) {
  return function(dispatch) {
    fakeFetch('googlebooksapi/myfavorites', {
      headers: {},
      body: JSON.stringify(book)
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: ADD_BOOK,
          book: data
        })
      })
  }
}

export function searchBooksSync(books) {
  return {
    type: SEARCH_BOOKS,
    books: books
  }
}

export function searchBooksThunk(query) {
  return function(dispatch) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: SEARCH_BOOKS,
          books: data.items
        })
      })
  }
}

function fakeFetch(url, options) {
  return new Promise((resolve, reject) => {
    setTimeout( function() {
      const fakeResponse = {
        json: () => {
          return JSON.parse(options.body)
        }
      }
      resolve(fakeResponse)
    }, 250)
  })
}
