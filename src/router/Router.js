import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
const Index = lazy(() => import('../views/light/index/Index'))
const Admin = lazy(() => import('../views/light/admin/Admin'))

export default function Router() {
  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Redirect from="/" to="/light/index/content?id=0" exact></Redirect>
          <Route path="/light/index" component={Index}></Route>
          <Route path="/light/admin" component={Admin}></Route>
        </Switch>
      </Suspense>
    </>
  )
}
