import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Component from '../components/Todoapp'

export default connect(state => state.todoapp)(Component)
