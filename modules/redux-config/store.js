import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store = null

export default (reducer, initialState = {}) => {
  const enhancers = composeWithDevTools()
  if (!store) {
    store = createStore(reducer, initialState, enhancers)
  }
  return store || createStore(reducer, initialState, enhancers)
}
