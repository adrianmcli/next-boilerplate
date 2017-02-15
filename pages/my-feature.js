import Link from 'next/link'
import { hello } from '~/@my-feature/core'
import { add } from '~/@my-feature/utils'

export default () =>
  <div>
    <h1>Hello World!</h1>
    <p>{ hello }</p>
    <p>1 + 2 = { add(1, 2) }</p>
    <Link href="/"><a>Home</a></Link>
  </div>
