export default ({ todo, removeTodo }) =>
  <div>
    <span>{ todo.title } </span>
    <button onClick={() => removeTodo(todo.id)}>x</button>
  </div>
