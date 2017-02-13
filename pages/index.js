import Link from 'next/link'
import { hello } from '~/core'

export default () =>
  <div>
    <h1>Hello World!</h1>
    <p>{ hello }</p>
    <Link href="/counter">Counter</Link>
  </div>
