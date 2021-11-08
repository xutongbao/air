import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ErrorBoundary, Loading } from '../components/light'
const Index = lazy(() => import('../views/light/index/Index'))
const Admin = lazy(() => import('../views/light/admin/Index'))
const FormView = lazy(() => import('../views/light/formview/Index'))
const Cards = lazy(() => import('../views/light/test/Cards'))
const CardPlus = lazy(() => import('../views/light/test/CardPlus'))
const Home = lazy(() => import('../views/light/extra/home/Index'))
const Template = lazy(() => import('../views/light/extra/template/Index'))

const NotFound = lazy(() => import('../views/light/notFound/NotFound'))

export default function Router() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Switch>
            <Redirect from="/" to="/light/index/content?id=0" exact></Redirect>
            <Route path="/light/index" component={Index}></Route>
            <Route path="/light/admin" component={Admin}></Route>
            <Route path="/light/formview" component={FormView}></Route>
            <Route path="/light/cards" component={Cards}></Route>
            <Route path="/light/cardPlus" component={CardPlus}></Route>
            <Route path="/air/light/extra/home" component={Home}></Route>
            <Route path="/extra/template" component={Template}></Route>
            <Route path="/404" component={NotFound}></Route>
            <Redirect from="*" to="/404" exact></Redirect>
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <Loading></Loading>
    </>
  )
}
