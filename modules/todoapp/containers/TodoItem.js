import { connect } from 'react-redux'
import { removeTodo } from '../actions'
import Component from '../components/TodoItem'

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
})

export default connect(() => ({}), mapDispatchToProps)(Component)
