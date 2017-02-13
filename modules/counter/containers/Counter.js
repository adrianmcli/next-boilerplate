import { connect } from 'react-redux'
import Component from '../components/Counter'

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'COUNTER_INCREMENT' }),
  decrement: () => dispatch({ type: 'COUNTER_DECREMENT' }),
})

export default connect(state => state.counter, mapDispatchToProps)(Component)
