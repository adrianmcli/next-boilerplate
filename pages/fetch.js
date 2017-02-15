import Link from 'next/link'
import { Provider } from 'react-redux'
import { FetchExample } from '~/fetch'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Async Fetch Example</h1>
      <FetchExample />
      <p>Open up Redux dev tools to see the actions</p>
      <Link href="/"><a>Home</a></Link>
    </div>
  </Provider>
