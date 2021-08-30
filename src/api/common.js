import axios from 'axios'
import { message } from 'antd'
import { baseURL } from '../utils/config'
import qs from 'qs'
import { showLoading, hideLoading, addLog } from '../utils/tools'
let isCanShow = true
const service = axios.create()

service.defaults.baseURL = baseURL

service.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessTokenForAdmin')
    const loginUserId = localStorage.getItem('userIdForAdmin')
    if (accessToken) config.headers.Authorization = 'Bearer ' + accessToken
    //请求携带基础信息参数
    if (config && config.assignParam !== false)
      Object.assign(config.data || {}, {
        loginUserId: loginUserId - 0,
      })

    if (config.method === 'get') config.params = { ...config.data }
    // 请求接口时显示loading，接口响应后隐藏loading，如果有特殊情况不能满足需求的，例如同时请求了多个接口
    // 且接口响应时间有比较大的差异，loading的显示隐藏状态不能友好的展示，可以直接在业务代码或api层，把
    // isLoading设置为false，则不再使用拦截器控制loading的状态，自己在业务代码里手动控制loading的状态
    if (config.isLoading !== false) showLoading()
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  (res) => {
    if (res.config.isLoading !== false) {
      hideLoading()
    }
    //code是node接口的状态码，state是java接口的状态码
    if (res.data.code === 200 || res.data.state === 1) {
      return res.data
    } else if (res.data.code === 400 || res.data.state === 0) {
      let msg = ''
      msg = res.data.message
      if (res.data && res.data.data) {
        msg += res.data.data.error_msg ? `:${res.data.data.error_msg} ` : ''
        msg += res.data.data.error_code ? res.data.data.error_code : ''
      }
      if (res.config.isShowMessage !== false) {
        message.warning(msg)
      }
      return res.data
    } else {
      return Promise.reject(res)
    }
  },
  (err) => {
    hideLoading()
    let { response } = err
    if (typeof response === 'undefined') {
      return Promise.reject(err)
    }

    if (response) {
      let { status } = response
      if (status === 401) {
        if (isCanShow) {
          message.warning('token失效,请重新登录!')
          isCanShow = false
        }
        setTimeout(() => {
          isCanShow = true
        }, 1000)

        window.reactRouter.replace({ pathname: '/light/login' })
      } else {
        message.warning(err && err.message)
        if (!(process.env.REACT_APP_MODE === 'dev')) {
          addLog({
            errorTitle: err.toString(),
            detail: `responseURL: ${
              response.request && response.request.responseURL
            }`,
          })
        }
      }
    } else {
      message.warning(err && err.message)
      if (!(process.env.REACT_APP_MODE === 'dev')) {
        addLog({ errorTitle: err.toString(), detail: err.message })
      }
    }
    return Promise.reject(err)
  }
)

export const common = async (config) => {
  if (config.contentType === 'application/x-www-form-urlencoded') {
    config.headers = { 'content-type': 'application/x-www-form-urlencoded' }
    config.data = qs.stringify(config.data)
  }
  let res = await service(config)
  return res
}
