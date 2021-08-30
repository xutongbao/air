import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

function Logo(props) {
  const { collapsed, userInfo } = props

  const renderTitle = () => {
    if (collapsed) {
      return (
        <span title="SalesWork">S</span>
      )
    } else {
      return (
        <div title="SalesWork">
          <span className="m-logo-text">SalesWork</span>
        </div>
      )
    }
  }

  useEffect(() => {
    document.title = 'SalesWork'
  }, [userInfo])

  return (
    <div className={`m-logo ${props.theme === 'dark' ? '' : 'light'}`}>
      {renderTitle()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    theme: state.getIn(['light', 'theme']),
    userInfo: state.getIn(['light', 'userInfo']),
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logo))
