import { ADD_TODO, REMOVE_TODO } from './actions'

export default (state = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const todo = {
        id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        title: action.text,
        completed: false,
      }
      console.log(todo)
      return { todos: [...state.todos, todo] }
    }
    case REMOVE_TODO: {
      return { todos: state.todos.filter(todo => todo.id !== action.id) }
    }
    default: return state
  }
}
