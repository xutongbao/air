import Api from '../../api'
import { formatAuthData } from '../../utils/tools'

const getAppList = (callback) => (dispatch) => {
  Api.light.appListSearch().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_LIGHT_STATE', key: ['appList'], value: res.data })
      callback && callback()
    }
  })
}

const getUserInfo =
  () =>
  (dispatch) => {
    let userInfo = localStorage.getItem('userInfoAdmin')
      ? JSON.parse(localStorage.getItem('userInfoAdmin'))
      : {}
    dispatch({
      type: 'SET_LIGHT_STATE',
      key: ['userInfo'],
      value: { ...userInfo },
    })
  }

const setAuth =
  ({ authData = false, roleId = '' } = {}) =>
  (dispatch, getState) => {
    const myRoleId = localStorage.getItem('roleIdForAdmin')
      ? localStorage.getItem('roleIdForAdmin')
      : ''
    const router = getState().getIn(['light', 'router']).toJS()
    if (
      Array.isArray(authData) &&
      authData.length > 0 &&
      myRoleId !== 'sysAdmin' &&
      roleId === myRoleId - 0
    ) {
      const { newRouter } = formatAuthData({ router: router, authData })
      console.log(newRouter)
      dispatch({ type: 'SET_LIGHT_STATE', key: ['router'], value: newRouter })
    } else if (myRoleId && myRoleId !== 'sysAdmin') {
      Api.light
        .adminRoleAuth({ id: myRoleId - 0, isLoading: false })
        .then((res) => {
          if (res.state === 1) {
            const authData =
              res.data &&
              res.data.permission &&
              Array.isArray(res.data.permission)
                ? res.data.permission
                : []
            const { newRouter } = formatAuthData({
              router: router,
              authData,
            })
            dispatch({
              type: 'SET_LIGHT_STATE',
              key: ['router'],
              value: newRouter,
            })
          }
        })
    }
  }

export { getAppList, getUserInfo, setAuth }
