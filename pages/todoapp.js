import Link from 'next/link'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Counter, reducer } from '~/todoapp'
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(reducer, composeWithDevTools())

export default () =>
  <Provider store={store}>
    <div>
      <h1>Todo App</h1>
      <Counter />
      <Link href="/">Home</Link>
    </div>
  </Provider>
