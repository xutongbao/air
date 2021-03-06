import React, { Suspense, lazy, useEffect } from 'react'
import { Menu } from 'antd'
import { Link, Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRouterSearchObj } from '../../../utils/tools'
import { getAppList } from  '../../../store/light/actionCreator'
import { MyBackTop } from '../../../components/light'

const Content = lazy(() => import('./content/Index'))

function Index(props) {
  const { appList } = props
  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)

  useEffect(() => {
    props.onDispatch(getAppList())
    // eslint-disable-next-line 
  }, [])

  return (
    <div className="m-wrap">
      <div className="m-header">
        <div className="m-header-logo">SalesWork</div>
        <Menu
          className="m-header-nav"
          selectedKeys={[routerSearchObj.id]}
          mode="horizontal"
        >
          {
            appList.map(item => (
              <Menu.Item key={item.key}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            ))
          }
        </Menu>
        <div className="m-header-operate">
          <Link to="/light/admin/home">管理后台</Link>
        </div>
      </div>
      <div className="m-content" id="m-content">
        <Suspense fallback={null}>
          <Switch>
            <Route path="/light/index/content" component={Content}></Route>
          </Switch>
        </Suspense>
        <MyBackTop dom={document.getElementById("m-content")}></MyBackTop>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    appList: state.getIn(['light', 'appList']).toJS(),
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))
