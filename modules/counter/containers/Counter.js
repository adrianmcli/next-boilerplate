import { connect } from 'react-redux'
import Component from '../components/Counter'

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
})

export default connect(state => state.counter, mapDispatchToProps)(Component)
