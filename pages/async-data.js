import Link from 'next/link'
import { Provider } from 'react-redux'
import { test } from '~/async-data'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Async Example</h1>
      { test }
      <Link href="/"><a>Home</a></Link>
    </div>
  </Provider>
