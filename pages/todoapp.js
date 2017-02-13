import Link from 'next/link'
import { Provider } from 'react-redux'
import { Counter } from '~/todoapp'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Todo App</h1>
      <Counter />
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
    </div>
  </Provider>
