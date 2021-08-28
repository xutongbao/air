import React from 'react'
import { connect } from 'react-redux'
import Edit from './edit/Index'
import Skin from './skin/Index'
import Set from './set/Index'
import Publish from './publish/Index'
import { getRouterSearchObj } from '../../../../utils/tools'

function Index(props) {
  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)

  const renderComponent = () => {
    let hook = {
      edit: {
        component: <Edit></Edit>,
      },
      skin: {
        component: <Skin></Skin>,
      },
      set: {
        component: <Set></Set>,
      },
      publish: {
        component: <Publish></Publish>,
      },
    }
    if (routerSearchObj.type) {
      return hook[routerSearchObj.type] ? hook[routerSearchObj.type].component : null
    } else {
      return <Edit></Edit>
    }
  }

  const renderFn = () => {
      return (
        <>
          {renderComponent()}
        </>
      )
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
