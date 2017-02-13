import { combineReducers } from 'redux'
import { reducer as counter } from '~/counter'
import { reducer as todoapp } from '~/todoapp'

export default combineReducers({
  counter,
  todoapp,
})
