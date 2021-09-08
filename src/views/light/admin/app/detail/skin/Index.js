import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import useList from './useList'
import Header from '../Header'
import Preview from '../../../../formview/Index'

function Index(props) {
  const {
    applicationTitle,
    routerSearchObj,
    skin,
    handleSave,
  } = useList(props)
  return (
    <div className="m-admin-content">
      <Header
        applicationTitle={applicationTitle}
        routerSearchObj={routerSearchObj}
        onSave={handleSave}
      ></Header>
      <div className="m-design-wrap">
        <div className="m-design-sidebar"></div>
        <div className="m-design-content">
          <Preview previewSkin={skin}></Preview>
        </div>
      </div>
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
