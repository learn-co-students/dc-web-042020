import { SEARCH_BOOKS, ADD_BOOK } from './actions'

const defaultState = {
  results: [],
  myBooks: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_BOOKS:
      // returning the new state, which is the old state, plus the new state
      // that set of books returned from the fetch call
      return {
        ...state,
        results: action.books
      }
    case ADD_BOOK:
      // returning the new state, which is the old state, plus the new state
      // adding a book to the myBooks array
      return {
        ...state,
        myBooks: [...state.myBooks, action.book]
      }
    default:
      return state
  }
}
