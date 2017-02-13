import * as counterActions from './actions'
import counterReducer from './reducer'
import Container from './containers/Counter'
import state from './initialState'

export const actions = counterActions
export const reducer = counterReducer
export const Counter = Container
export const initialState = state
