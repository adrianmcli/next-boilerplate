export default ({ todos = [] }) => {
  return (
    <div>
      <input type="text"/>
      <div>
        {
          todos.map((todo, i) => <div key={i}>item</div>)
        }
      </div>
    </div>
  )
}
