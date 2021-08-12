import { useState, useEffect } from 'react'
import Api from '../../../api'
import { Form } from 'antd'
import { getRouterSearchObj } from '../../../utils/tools'
import useFields from './useFields'


export default function useList(props) {
  const [form] = Form.useForm()
  const [modalFields, setModalFields] = useState([])
  const { getModalFields } = useFields(props)
  // eslint-disable-next-line
  const [initValues, setInitValues] = useState({})


  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)
  const tableId = routerSearchObj.id - 0

  //搜索
  const handleSearch = () => {
    Api.light
      .tableSearch({ tableId })
      .then((res) => {
        if (res.code === 200) {
          setModalFields(getModalFields(res.data.fields))
        }
      })
  }

  //添加或编辑
  const handleFinish = (values) => {
    console.log('Success:', values)
    Api.light.tableAdd({ tableId, dataItem: values }).then((res) => {
      if (res.code === 200) {
      }
    })
  }

  //校验失败
  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  //挂载完执行，切换路由时，search会变化，也会执行
  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line
  }, [props.location.search])

  return {
    form,
    initValues,
    modalFields,
    handleSearch,
    handleFinish,
    handleFinishFailed,
  }
}
