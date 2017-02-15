/* eslint-disable fp/no-nil */
const prettyJSON = obj => JSON.stringify(obj, null, '\t')

export default ({ startRequest, loading, data }) =>
  <div>
    <button onClick={startRequest}>Fetch Data</button>
    { loading ? <div>Loading...</div> : <div>Press the button</div>}
    { data ? <pre>{prettyJSON(data)}</pre> : '' }
  </div>
