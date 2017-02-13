import Link from 'next/link'
import { Provider } from 'react-redux'
import { Counter } from '~/counter'
import { reducers, initStore, initialState } from '~/redux'

let store = initStore(reducers, initialState)

export default () =>
  <Provider store={store}>
    <div>
      <h1>Hello Counter!</h1>
      <Counter />
      <Link href="/">Home</Link>
      <Link href="/todoapp">Todoapp</Link>
    </div>
  </Provider>
