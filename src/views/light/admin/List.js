import React, { Suspense, useMemo } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { MyBackTop } from '../../../components/light'
import Loading from '../../../components/light/Loading'
import Header from './Header'
import Nav from './Nav'

function List(props) {
  const {
    router,
    location: { pathname },
  } = props
  // const Home = lazy(() => import('./home/Home'))
  // const Home = lazy(async () => {
  //   return await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(import('./home/Home'))
  //     }, 1000)
  //   })
  // })

  // 只有router变化时才会重新渲染listDom，useMemo函数可以起到性能优化的作用
  const listDom = useMemo(() => {
    const listDom = []
    const listRender = (arr) => {
      arr.forEach((item) => {
        if (item.children) {
          listRender(item.children)
        } else {
          if (item.isVisible) {
            // 有些菜单只在开发环境展示
            if (!item.isDevMenu || process.env.REACT_APP_MODE === 'dev') {
              listDom.push(
                <Route
                  key={item.path}
                  path={item.path}
                  component={item.component}
                ></Route>
              )
            }
          }
        }
      })
    }
    const myRouter = router.toJS()
    listRender(myRouter)
    // 路由的数据保存在store里，通过url切换不同系统的路由，登录时切换系统，路由还没切换好，不能添加404的重定向
    // 不然每次切换系统后登录都会404
    if (Array.isArray(myRouter) && myRouter.length > 0) {
      if (myRouter[0].path.slice(0, 5) === pathname.slice(0, 5)) {
        listDom.push(<Redirect key="404" from="*" to="/404" exact></Redirect>)
      }
    }

    return listDom
    // eslint-disable-next-line
  }, [router])

  return (
    <div className="m-list">
      <Header></Header>
      <div className="m-list-info" id="m-list-info">
        <Nav></Nav>
        <Suspense fallback={<Loading isLazyLoading={true}></Loading>}>
          <div className="m-content-wrap" id="m-content-wrap">
            <Switch>{listDom}</Switch>
          </div>
        </Suspense>
      </div>
      <MyBackTop></MyBackTop>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    router: state.getIn(['light', 'router']),
    theme: state.getIn(['light', 'theme']),
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List))
