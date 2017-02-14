// constants
export const ADD_TODO = 'todoapp/ADD_TODO'
export const REMOVE_TODO = 'todoapp/REMOVE_TODO'

// action creators
export const addTodo = text => ({ type: ADD_TODO, text })
export const removeTodo = id => ({ type: REMOVE_TODO, id })
