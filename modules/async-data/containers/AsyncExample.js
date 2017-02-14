import { connect } from 'react-redux'
import { startRequest } from '../actions'
import Component from '../components/AsyncExample'

const mapDispatchToProps = dispatch => ({
  startRequest: () => dispatch(startRequest())
})

export default connect(state => state.asyncData, mapDispatchToProps)(Component)
