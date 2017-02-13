import { connect } from 'react-redux'
import Component from '../components/Counter'

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'TODOAPP_INCREMENT' }),
  decrement: () => dispatch({ type: 'TODOAPP_DECREMENT' }),
})

export default connect(state => state.todoapp, mapDispatchToProps)(Component)
