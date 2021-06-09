import Api from '../../api'

const getRouter = (callback) => (dispatch) => {
  Api.light.routerSearch().then(res => {
    if (res.code === 200) {
      dispatch({ type: 'SET_LIGHT_STATE', key: ['router'], value: res.data })
      callback && callback()
    }
  })
}

export {
  getRouter,
}