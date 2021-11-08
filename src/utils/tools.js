import store from '../store'
import { Input, InputNumber, Form } from 'antd'
import moment from 'moment'
import { fromJS } from 'immutable'
import Api from '../api'
import Store from '../store'

const { TextArea } = Input

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
  var reg = /http(s)?:\/\/([A-Za-z0123456789:.-]+)\/\S+/
  var result = reg.exec(url)
  if (result) {
    return 'http://' + result[2]
  }
}

//获取表单组件
const getFormComponentArr = () => {
  return [
    {
      id: 1,
      title: '单行文本',
      formComponentName: 'Input',
      component: <Input></Input>,
      getComponent: ({ props }) => {
        return <Input {...props}></Input>
      },
    },
    {
      id: 2,
      title: '多行文本',
      formComponentName: 'TextArea',
      component: <TextArea></TextArea>,
      getComponent: ({ props }) => {
        return <TextArea {...props}></TextArea>
      },
    },
    {
      id: 3,
      title: '数字',
      formComponentName: 'InputNumber',
      component: <InputNumber style={{ width: '100%' }}></InputNumber>,
      getComponent: ({ props }) => {
        return <InputNumber style={{ width: '100%' }} {...props}></InputNumber>
      },
    },
    {
      id: 4,
      title: '图片',
      formComponentName: 'Image',
      component: <img style={{ width: '100%' }} alt="图片"></img>,
      getComponent: ({ props }) => {
        return <img style={{ width: '100%' }} {...props} alt="图片"></img>
      },
    },
  ]
}

//获取渲染函数
const getRenderFunArr = () => {
  return [
    {
      id: 1,
      title: 'span标签',
      renderFunName: 'renderSpan',
      formComponentNameArr: ['Input', 'TextArea'],
      render: (text) => {
        return <span>{text}</span>
      },
    },
    {
      id: 2,
      title: '日期',
      renderFunName: 'renderDatetime',
      formComponentNameArr: [],
      render: (text) => {
        return (
          <span>{text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : ''}</span>
        )
      },
    },
    {
      id: 3,
      title: '图片',
      renderFunName: 'renderImage',
      formComponentNameArr: ['Image'],
      render: (text) => {
        return <img alt="图片" src={text}></img>
      },
    },
  ]
}

//根据fields获取对话框字段
const getFieldsDom = (fields) => {
  const arr = []
  fields.forEach((item) => {
    if (item.isModalField) {
      const result = getFormComponentArr().find(
        (componentItem) =>
          componentItem.formComponentName === item.formComponentName
      )
      if (item.type === 'formItem') {
        arr.push(
          <Form.Item
            key={item.id}
            label={item.title}
            name={item.dataIndex}
            rules={item.rules}
            className="m-formview-formitem"
          >
            {result ? (
              result.getComponent({ props: item.props })
            ) : (
              <Input></Input>
            )}
          </Form.Item>
        )
      } else if (item.type === 'image') {
        arr.push(
          <Form.Item key={item.id} name={item.dataIndex} wrapperCol={24}>
            {result ? (
              result.getComponent({
                props: {
                  src: item.src,
                },
              })
            ) : (
              <Input></Input>
            )}
          </Form.Item>
        )
      }
    }
  })
  return arr
}

//格式化权限数据
const formatAuthData = ({ router, authData = [], isForTable = false }) => {
  router = deepClone(router)
  const newRouterAuthDataArr = []
  const find = (arr, parentId = '') => {
    for (let i = 0; i < arr.length; i++) {
      //查询后端提供的权限
      const findResult = authData.find(
        (item) => item.path === arr[i].path || item.path === arr[i].key
      )
      //后端的权限应用到菜单的显示隐藏
      if (findResult) {
        const checkResult =
          Array.isArray(findResult.auth) &&
          findResult.auth.find((item) => item.name === 'check')
        if (checkResult) {
          arr[i].isVisible = checkResult.isVisible
        } else {
          arr[i].isVisible = false
        }
      }
      //后端的权限应用到按钮的显示隐藏
      if (Array.isArray(arr[i].auth)) {
        arr[i].auth.forEach((authItem) => {
          if (findResult && Array.isArray(findResult.auth)) {
            const temp = findResult.auth.find(
              (item) => item.name === authItem.name
            )
            if (temp) {
              authItem.isVisible = temp.isVisible
            } else {
              authItem.isVisible = false
            }
          } else {
            if (authItem.name === 'check') {
              authItem.isVisible = true
            } else {
              authItem.isVisible = false
            }
          }
        })
        let path = ''
        if (arr[i].path) {
          path = arr[i].path
        } else if (arr[i].key) {
          path = arr[i].key
        }
        newRouterAuthDataArr.push({
          path,
          auth: deepClone(arr[i].auth),
        })
      }
      //后端的权限应用到数据范围
      if (arr[i].dataRange) {
        if (findResult && findResult.dataRange && findResult.dataRange.value) {
          arr[i].dataRange.value = findResult.dataRange.value
        } else {
          arr[i].dataRange.value = 1
        }
        const index = newRouterAuthDataArr.findIndex(
          (item) => item.path === arr[i].path
        )
        if (index >= 0) {
          newRouterAuthDataArr[index] = {
            ...newRouterAuthDataArr[index],
            dataRange: deepClone(arr[i].dataRange),
          }
        }
      }
      //ID
      if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
        arr[i].id = `${parentId}${i + 1}`
        find(arr[i].children, `${parentId}${i + 1}`)
      } else {
        arr[i].id = `${parentId}${i + 1}`
        if (
          arr[i].isDevMenu === true &&
          isForTable &&
          !(process.env.REACT_APP_MODE === 'dev')
        ) {
          arr.splice(i, 1)
          i = i - 1
        }
      }
    }
  }
  find(router)
  return { newRouter: router, newRouterAuthDataArr }
}

//深拷贝
const deepClone = (obj) => {
  return fromJS(obj).toJS()
}

//添加日志
const addLog = ({ errorTitle, detail }) => {
  const {
    location: { pathname },
  } = window.reactRouter
  const userInfo = Store.getState().getIn(['light', 'userInfo']).toJS()
  const tempValues = {
    username: userInfo.username,
    path: pathname,
    errorTitle,
    detail,
  }
  Api.light.testLogAdd({ dataItem: { ...tempValues } }).then(() => {})
}

// 添加/更新时间
const renderTime = (text, record) => {
  return (
    <div className="m-time-item-wrap">
      <div className="m-time-item">
        {moment(text)
          .format('YYYY-MM-DD HH:mm:ss')
          .split(' ')
          .map((item, index) => (
            <div key={index} className={`${index === 1 ? 'm-space-left' : ''}`}>
              {item}
            </div>
          ))}
      </div>
      <div className="m-time-item">
        {record.edittime
          ? moment(record.edittime)
              .format('YYYY-MM-DD HH:mm:ss')
              .split(' ')
              .map((item, index) => (
                <div
                  key={index}
                  className={`${index === 1 ? 'm-space-left' : ''}`}
                >
                  {item}
                </div>
              ))
          : ''}
      </div>
    </div>
  )
}

//ip地址替换成域名
const ipToDomainName = () => {

}

export {
  showLoading,
  hideLoading,
  parseQueryString,
  getRouterSearchObj,
  getHost,
  getFormComponentArr,
  getRenderFunArr,
  getFieldsDom,
  formatAuthData,
  deepClone,
  addLog,
  // 添加/更新时间
  renderTime,
  //ip地址替换成域名
  ipToDomainName,
}
