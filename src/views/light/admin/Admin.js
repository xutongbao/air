import React, { Suspense, lazy } from 'react'
import { Menu } from 'antd'
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import Logo from './Logo'

const ApplicationPlus = lazy(() => import('./applicationPlus/Index'))
const SetApplicationPlus = lazy(() => import('./setApplicationPlus/Index'))


function Admin(props) {
  const {
    location: { pathname },
  } = props
  return (
    <div className="m-admin-wrap">
      <div className="m-admin-menu-wrap">
        <Menu
          selectedKeys={[pathname]}
          mode="inline"
          theme="dark"
          className="m-admin-menu"
        >
          <Logo></Logo>
          <Menu.Item key="/light/admin/applicationPlus">
            <Link to="/light/admin/applicationPlus">应用管理</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="m-admin-info">
        <div className="m-header">
          <div className="m-header-title"></div>
          <div className="m-header-nav"></div>
          <div className="m-header-operate">
            <Link to="/light/index/content?id=0">进入应用</Link>
          </div>
        </div>
        <Suspense fallback={null}>
          <Switch>
            <Route
              path="/light/admin/applicationPlus"
              component={ApplicationPlus}
            ></Route>
            <Route
              path="/light/admin/setApplicationPlus"
              component={SetApplicationPlus}
            ></Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}

export default withRouter(Admin)
