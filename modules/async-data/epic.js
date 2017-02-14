import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/mapTo'

export default action$ =>
  action$.filter(action => action.type === 'PING')
    .mapTo({ type: 'PONG' })
