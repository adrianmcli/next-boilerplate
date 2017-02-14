import { combineEpics } from 'redux-observable'
import { epic as pingEpic } from '~/async-data'

export default combineEpics(
  pingEpic
)
