/* eslint-disable fp/no-nil */
import { ADD_TODO, REMOVE_TODO } from './actions'

export default (state = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        title: action.text,
        completed: false,
      }
      return { todos: [...state.todos, newTodo] }
    }
    case REMOVE_TODO: {
      return { todos: state.todos.filter(todo => todo.id !== action.id) }
    }
    default: return state
  }
}
