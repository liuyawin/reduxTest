import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import FieldLevelValidate from '../components/FieldLevelValidate'
import ResultList from './../components/ResultList'
import * as AjaxAction from '../actions/ajaxAction'

const App = ({results, actions}) => {
  console.log(actions)
  return (
  <div>
    <FieldLevelValidate submitAction={actions.submit} />
    <ResultList results = {results}/>
  </div>
)
}

App.propTypes = {
  results: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  results: state.results
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AjaxAction, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
