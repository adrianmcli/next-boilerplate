/* eslint-disable fp/no-nil */
import { START_REQUEST, RESPONSE_RECEIVED } from './actions'

export default (state = { loading: false }, action) => {
  switch (action.type) {
    case START_REQUEST: return { loading: true }
    case RESPONSE_RECEIVED: return { loading: false, data: action.data }
    default: return state
  }
}
