// constants
export const START_REQUEST = 'asynData/START_REQUEST'
export const RESPONSE_RECEIVED = 'asynData/RESPONSE_RECEIVED'

// action creators
export const startRequest = () => ({ type: START_REQUEST })
export const responseReceived = () => ({ type: RESPONSE_RECEIVED })
