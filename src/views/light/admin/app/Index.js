import React from 'react'
import { connect } from 'react-redux'
import List from './list/Index'
import Detail from './detail/Index'
import { getRouterSearchObj } from '../../../../utils/tools'

function Index(props) {
  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)

  const renderComponent = () => {
    let hook = {
      list: {
        component: <List></List>,
      },
    }
    if (routerSearchObj.type) {
      return hook[routerSearchObj.type] ? hook[routerSearchObj.type].component : null
    } else {
      return <List></List>
    }
  }

  const renderFn = () => {
    if (routerSearchObj.type === 'detail') {
      return <Detail></Detail>
    } else {
      return (
        <>
          {renderComponent()}
        </>
      )
    }
  }

  return <>{renderFn()}</>
}

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Index)
