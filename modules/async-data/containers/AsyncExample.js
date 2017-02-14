import { connect } from 'react-redux'
// import { increment, decrement } from '../actions'
import Component from '../components/AsyncExample'

const mapDispatchToProps = dispatch => ({
  ping: () => dispatch({ type: 'PING' })
  // increment: () => dispatch(increment()),
  // decrement: () => dispatch(decrement()),
})

export default connect(state => state.asyncData, mapDispatchToProps)(Component)
