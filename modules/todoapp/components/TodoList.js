import TodoItem from '../containers/TodoItem'

export default ({ todos = [] }) =>
  <div>
    {
      todos.map((todo, i) => <TodoItem key={i} todo={todo} />)
    }
  </div>
