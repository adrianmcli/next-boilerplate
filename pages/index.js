import Link from 'next/link'
import { hello } from '~/core'

export default () =>
  <div>
    <h1>Hello World!</h1>
    <p>{ hello }</p>
    <ul>
      <li><Link href="/counter"><a>Counter</a></Link></li>
      <li><Link href="/todoapp"><a>Todoapp</a></Link></li>
      <li><Link href="/fetch"><a>Fetch</a></Link></li>
      <li><Link href="/my-feature"><a>My Feature</a></Link></li>
    </ul>
  </div>
