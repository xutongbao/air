import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
const Index = lazy(() => import('../views/light/index/Index'))
const Admin = lazy(() => import('../views/light/admin/Admin'))
const FormView = lazy(() => import('../views/light/formview/Index'))
const Cards = lazy(() => import('../views/light/test/Cards'))


export default function Router() {
  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Redirect from="/" to="/light/index/content?id=0" exact></Redirect>
          <Route path="/light/index" component={Index}></Route>
          <Route path="/light/admin" component={Admin}></Route>
          <Route path="/light/formview" component={FormView}></Route>
          <Route path="/light/cards" component={Cards}></Route>
        </Switch>
      </Suspense>
    </>
  )
}
