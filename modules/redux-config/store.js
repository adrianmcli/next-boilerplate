/* eslint-disable fp/no-nil, fp/no-let, fp/no-mutation, better/no-ifs */
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import epics from './epics'

let store = null

export default (reducer, initialState = {}) => {
  const epicMiddleware = createEpicMiddleware(epics)
  const enhancers = composeWithDevTools(applyMiddleware(epicMiddleware))
  if (!store) {
    store = createStore(reducer, initialState, enhancers)
  }
  return store
}
