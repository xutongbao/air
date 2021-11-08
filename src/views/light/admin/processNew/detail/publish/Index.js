import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import useList from './useList'
import Header from '../Header'

function Index(props) {
  const {
    applicationTitle,
    routerSearchObj,
    handleSave,
  } = useList(props)
  return (
    <div className="m-admin-content">
      <Header
        applicationTitle={applicationTitle}
        routerSearchObj={routerSearchObj}
        onSave={handleSave}
      ></Header>
      <div className="m-empty-page">占位空页面</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_LIGHT_STATE', key, value })
    },
    onDispatch(action) {
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))
