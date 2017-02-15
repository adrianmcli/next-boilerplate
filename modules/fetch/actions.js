// constants
export const START_REQUEST = 'fetch/START_REQUEST'
export const RESPONSE_RECEIVED = 'fetch/RESPONSE_RECEIVED'

// action creators
export const startRequest = () => ({ type: START_REQUEST })
export const responseReceived = response => ({
  type: RESPONSE_RECEIVED,
  data: response,
})
