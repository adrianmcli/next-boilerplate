export default (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'TODOAPP_INCREMENT': return { count: state.count + 1 }
    case 'TODOAPP_DECREMENT': return { count: state.count - 1 }
    default: return state
  }
}
