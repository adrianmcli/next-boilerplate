import Link from 'next/link'
import { Provider } from 'react-redux'
import { Todoapp } from '~/todoapp'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Todo App</h1>
      <Todoapp />
      <Link href="/"><a>Home</a></Link>
    </div>
  </Provider>
