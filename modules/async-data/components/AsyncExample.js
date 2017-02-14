export default ({ startRequest, loading }) =>
  <div>
    <button onClick={startRequest}>Fetch Data</button>
    { loading ? <div>Loading...</div> : <div>Press the button</div>}
  </div>
