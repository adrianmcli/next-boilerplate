import { combineReducers } from 'redux'
import { reducer as counter } from '~/counter'
import { reducer as todoapp } from '~/todoapp'
import { reducer as asyncData } from '~/async-data'

export default combineReducers({
  counter,
  todoapp,
  asyncData,
})
