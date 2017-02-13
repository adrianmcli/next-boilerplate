import Input from '../containers/Input'
import TodoList from './TodoList'

export default ({ todos = [] }) =>
  <div>
    <Input />
    <TodoList todos={todos} />
  </div>
