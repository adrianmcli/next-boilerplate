import TodoItem from '../containers/TodoItem'

export default ({ todos = [] }) =>
  <div>
    {
      todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
    }
  </div>
