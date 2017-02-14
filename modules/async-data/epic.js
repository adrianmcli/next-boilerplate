import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/delay'

import { START_REQUEST, responseReceived } from './actions'

export default action$ =>
  action$.filter(action => action.type === START_REQUEST)
    .delay(2000)
    .mapTo(responseReceived())
