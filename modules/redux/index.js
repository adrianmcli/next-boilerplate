import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as counter } from '~/counter'
import { reducer as todoapp } from '~/todoapp'

export const reducers = combineReducers({
  counter,
  todoapp
})

let store = null

export const initStore = (reducer, initialState = {}, isServer) => {
  const enhancers = composeWithDevTools()
  if (!store) {
    store = createStore(reducer, initialState, enhancers)
  }
  return store
}
