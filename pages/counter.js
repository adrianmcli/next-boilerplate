import Link from 'next/link'
import { Provider } from 'react-redux'
import { Counter } from '~/counter'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Hello Counter!</h1>
      <Counter />
      <Link href="/"><a>Home</a></Link>
    </div>
  </Provider>
