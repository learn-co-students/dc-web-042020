const initialState = {
  count: 50
}

const reducer = (oldState = initialState, action) => {
  console.log("oldState:", oldState, "action:", action)
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {count: oldState.count + action.number}
    case "DECREMENT_COUNTER":
      return {count: oldState.count - action.number}
    default:
      return oldState
  }
}

export default reducer
