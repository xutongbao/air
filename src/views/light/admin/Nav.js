import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'

function Nav(props) {
  const {
    router,
    location: { pathname },
  } = props

  let arr = []
  let breadcrumbList = []
  const find = (myRouter) => {
    for (let i = 0; i < myRouter.length; i++) {
      if (myRouter[i].children) {
        arr.push(myRouter[i].title)
        find(myRouter[i].children)
      } else {
        if (myRouter[i].path === pathname) {
          arr.push(myRouter[i].title)
          breadcrumbList = JSON.parse(JSON.stringify(arr))
          return
        }
      }
    }
    arr.pop()
  }
  find(router)

  return (
    <div className="m-list-nav">
      <Breadcrumb>
        {breadcrumbList.map((item, index) => (
          <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    router: state.getIn(['light', 'router']).toJS(),
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav))
