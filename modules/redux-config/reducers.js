import { combineReducers } from 'redux'
import { reducer as counter } from '~/counter'
import { reducer as todoapp } from '~/todoapp'
import { reducer as fetch } from '~/fetch'

export default combineReducers({
  counter,
  todoapp,
  fetch,
})
