import Link from 'next/link'
import { hello } from '~/core'

export default () =>
  <div>
    <h1>Hello World!</h1>
    <p>{ hello }</p>
    <Link href="/counter"><a>Counter</a></Link>
    <Link href="/todoapp"><a>Todoapp</a></Link>
    <Link href="/async-data"><a>Async</a></Link>
  </div>
