import Link from 'next/link'
import { Counter } from '~/counter'

export default () =>
  <div>
    <h1>Hello Counter!</h1>
    <Counter />
    <Link href="/">Home</Link>
  </div>
