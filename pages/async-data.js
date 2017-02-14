import Link from 'next/link'
import { Provider } from 'react-redux'
import { AsyncExample } from '~/async-data'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Async Example</h1>
      <AsyncExample />
      <p>Open up Redux dev tools to see the actions</p>
      <Link href="/"><a>Home</a></Link>
    </div>
  </Provider>
