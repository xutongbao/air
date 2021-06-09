import store from '../store'
import { Input } from 'antd'
import moment from 'moment'

let timer

//显示loading
const showLoading = (delay = 0) => {
  timer = setTimeout(() => {
    store.dispatch({
      type: 'SET_LIGHT_STATE',
      key: ['isLoading'],
      value: true,
    })
  }, delay)
}

//隐藏loading
const hideLoading = () => {
  clearTimeout(timer)
  store.dispatch({
    type: 'SET_LIGHT_STATE',
    key: ['isLoading'],
    value: false,
  })
}

//把url里的查询字段转换成对象
const parseQueryString = (url) => {
  let params = {}
  let arr = url.split('?')
  if (arr.length <= 1) {
    return params
  }
  arr = arr[1].split('&')
  for (let i = 0, l = arr.length; i < l; i++) {
    let a = arr[i].split('=')
    params[a[0]] = a[1]
  }
  return params
}

//包路由里的查询字段转换成对象
const getRouterSearchObj = (props) => {
  const {
    location: { search },
  } = props
  const routerSearchObj = parseQueryString(search)
  return routerSearchObj
}

//获取主机名
const getHost = (url) => {
  var reg = /http(s)?:\/\/([A-Za-z0123456789:.]+)\/\S+/
  var result = reg.exec(url)
  if (result) {
    return 'http://' + result[2]
  }
}

//获取表单组件
const getFormComponentArr = () => {
  return [
    {
      id: 0,
      title: '输入框(Input)',
      formComponentName: 'Input',
      component: <Input></Input>,
    },
  ]
}

//获取渲染函数
const getRenderFunArr = () => {
  return [
    {
      id: 0,
      title: 'span标签',
      renderFunName: 'renderSpan',
      formComponentNameArr: ['Input'],
      render: (text) => {
        return <span>{text}</span>
      },
    },
    {
      id: 1,
      title: '日期',
      renderFunName: 'renderDatetime',
      formComponentNameArr: [],
      render: (text) => {
        return <span>{text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : ''}</span>
      },
    },
  ]
}

export {
  showLoading,
  hideLoading,
  parseQueryString,
  getRouterSearchObj,
  getHost,
  getFormComponentArr,
  getRenderFunArr,
}
