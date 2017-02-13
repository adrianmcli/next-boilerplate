import Input from '../containers/Input'
import TodoList from './TodoList'

export default ({ todos = [], addTodo }) => {
  return (
    <div>
      <Input />
      <TodoList todos={todos} />
    </div>
  )
}
