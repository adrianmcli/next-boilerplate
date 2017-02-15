import { combineEpics } from 'redux-observable'
import { epic as fetchEpic } from '~/fetch'

export default combineEpics(
  fetchEpic,
)
