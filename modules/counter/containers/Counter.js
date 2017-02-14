import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Component from '../components/Counter'

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(state => state.counter, mapDispatchToProps)(Component)
