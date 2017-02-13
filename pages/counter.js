import Link from 'next/link'
import { Provider } from 'react-redux'
import { Counter } from '~/counter'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Hello Counter!</h1>
      <Counter />
      <Link href="/">Home</Link>
      <Link href="/todoapp">Todoapp</Link>
    </div>
  </Provider>
