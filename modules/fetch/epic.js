import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/exhaustMap'

import { START_REQUEST, responseReceived } from './actions'

const request$ = Observable
  .ajax({ url: 'https://jsonplaceholder.typicode.com/posts/1' })
  .map(data => data.response)

export default action$ =>
  action$.filter(action => action.type === START_REQUEST)
    .exhaustMap(() => request$)
    .map(responseReceived)
