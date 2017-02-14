export default ({ count = 0, increment, decrement }) =>
  <div>
    <h1>{ count }</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
