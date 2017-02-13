import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Component from '../components/Input'

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
})

export default connect(() => ({}), mapDispatchToProps)(Component)
