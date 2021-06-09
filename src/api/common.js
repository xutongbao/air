import axios from 'axios'
import { message } from 'antd'
import { baseURL  } from '../utils/config'

axios.defaults.baseURL = baseURL

axios.interceptors.request.use(
  (config) => {
    config.headers.token = localStorage.getItem('token') || ''

    // if (config.isNeedExtraData !== false) {
    //   let extraData = { userId: 1 }
    //   if (config.method === "get") {
    //     config.params = { ...extraData, ...config.data }
    //   } else {
    //     config.data = { ...extraData, ...config.data }
    //   }
    // }
    if (config.method === 'get') {
      config.params = { ...config.data }
    } else {
      config.data = { ...config.data }
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use((res) => {
  if (res.data.code === 200) {
    return res.data
  } else if (res.data.code === 400) {
    message.warning(res.data.message)
    return res.data
  } else {
    return Promise.reject(res)
  }
})

export const common = async (config) => {
  let res = await axios(config)
  return res
}
