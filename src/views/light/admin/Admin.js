import React, { Suspense, lazy } from 'react'
import { Menu } from 'antd'
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import Logo from './Logo'

const Application = lazy(() => import('./application/Index'))
const Other = lazy(() => import('./other/Other'))
const SetApplication = lazy(() => import('./setApplication/Index'))

function Admin(props) {
  const { location: { pathname} } = props
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
          <Menu.Item key="/light/admin/application">
            <Link to="/light/admin/application">应用管理</Link>
          </Menu.Item>
          <Menu.Item key="/light/admin/other">
            <Link to="/light/admin/other">其他管理</Link>
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
              path="/light/admin/application"
              component={Application}
            ></Route>
            <Route path="/light/admin/other" component={Other}></Route>
            <Route path="/light/admin/setApplication" component={SetApplication}></Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}

export default withRouter(Admin)