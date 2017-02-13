import Link from 'next/link'
import { Provider } from 'react-redux'
import { Counter } from '~/todoapp'
import { reducers, initStore } from '~/redux'

let store = initStore(reducers)

export default () =>
  <Provider store={store}>
    <div>
      <h1>Todo App</h1>
      <Counter />
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
    </div>
  </Provider>
