import { SAMPLE_ACTION } from './actions'

const defaultState = {
  counter: 1,
  results: [],
  myBooks: []
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {
        ...state,
        counter: action.counter
      }
    default:
      return state
  }
}
