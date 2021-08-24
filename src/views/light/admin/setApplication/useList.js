import { useState, useEffect } from 'react'
import Api from '../../../../api'
import { Modal, Form } from 'antd'
import { getRouterSearchObj } from '../../../../utils/tools'

const { confirm } = Modal

export default function useList(props) {
  const [dataSource, setDataSource] = useState([])
  const [form] = Form.useForm()
  //控制对话框显示和隐藏
  const [isModalVisible, setIsModalVisible] = useState(false)
  //添加表单默认值
  const [initValues, setInitValues] = useState({})
  const [type, setType] = useState('add')
  const [applicationTitle, setApplicationTitle] = useState()
  const [modalTitle, setModalTitle] = useState()
  const [formComponentName, setFormComponentName] = useState()

  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)
  const tableId = routerSearchObj.id

  const addInitValues = {
    // rules: {
    //   required: true,
    //   message: '',
    // }
  }

  //搜索
  const handleSearch = () => {
    Api.light.fieldsSearch({ tableId }).then((res) => {
      if (res.code === 200) {
        setDataSource(res.data.fields)
        setApplicationTitle(res.data.title)
      }
    })
  }

  //删除
  const handleDelete = (record) => {
    console.log('删除, id:', record.id)
    confirm({
      title: '确认要删除吗？',
      onOk() {
        Api.light.fieldsDelete({ tableId, ids: [record.id] }).then((res) => {
          if (res.code === 200) {
            handleSearch()
          }
        })
      },
    })
  }

  //显示添加对话框
  const handleAdd = () => {
    setType('add')
    setInitValues(addInitValues)
    console.log(addInitValues)
    setModalTitle('添加字段')
    setIsModalVisible(true)
  }

  //显示编辑对话框
  const handleEdit = (record) => {
    console.log('编辑, id:', record)
    setType('edit')
    record.rules = Array.isArray(record.rules) ? record.rules[0] : {}
    setInitValues({ ...initValues, ...record })
    setModalTitle('编辑字段')
    setIsModalVisible(true)
  }

  //添加或编辑
  const handleFinish = (values) => {
    console.log('Success:', values)
    values.rules = Array.isArray(values.rules) ? values.rules : [values.rules]
    if (type === 'add') {
      Api.light.fieldsAdd({ tableId, dataItem: values }).then((res) => {
        if (res.code === 200) {
          setIsModalVisible(false)
          handleSearch()
        }
      })
    } else if (type === 'edit') {
      values.rules = Array.isArray(values.rules) ? values.rules : [values.rules]
      Api.light
        .fieldsEdit({
          tableId,
          id: initValues.id,
          dataItem: { ...initValues, ...values },
        })
        .then((res) => {
          if (res.code === 200) {
            setIsModalVisible(false)
            handleSearch()
          }
        })
    }
  }

  //校验失败
  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  //查看
  const handleCheck = (record) => {
    setType('check')
    setInitValues({ ...initValues, ...record })
    setModalTitle('查看字段')
    setIsModalVisible(true)
  }

  //表单字段值更新时触发回调事件，监控表单组件变化
  const handleValuesChange = (changedValues, allValues) => {
    console.log(changedValues, allValues)
    setFormComponentName(allValues.formComponentName)
  }

  //挂载完
  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line 
  }, [])

  useEffect(() => {
    form.resetFields()
  }, [isModalVisible, form])

  return {
    dataSource,
    isModalVisible,
    initValues,
    type,
    form,
    applicationTitle,
    modalTitle,
    formComponentName,
    handleSearch,
    handleDelete,
    handleAdd,
    handleEdit,
    handleCheck,
    setIsModalVisible,
    handleFinish,
    handleFinishFailed,
    handleValuesChange,
  }
}
