import fetchActions from './actions'
import fetchReducer from './reducer'
import Container from './containers/FetchExample'
import fetchEpic from './epic'

export const actions = fetchActions
export const reducer = fetchReducer
export const FetchExample = Container
export const epic = fetchEpic
