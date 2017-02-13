import * as todoappActions from './actions'
import todoappReducer from './reducer'
import Container from './containers/Todoapp'
import state from './initialState'

export const actions = todoappActions
export const reducer = todoappReducer
export const Todoapp = Container
export const initialState = state
