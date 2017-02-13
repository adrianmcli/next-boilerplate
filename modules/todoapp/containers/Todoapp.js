import { connect } from 'react-redux'
import Component from '../components/Todoapp'

export default connect(state => state.todoapp)(Component)
