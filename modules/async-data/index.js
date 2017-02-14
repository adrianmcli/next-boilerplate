import asyncDataReducer from './reducer'
import Container from './containers/AsyncExample'
import pingEpic from './epic'

export const reducer = asyncDataReducer
export const AsyncExample = Container
export const epic = pingEpic
