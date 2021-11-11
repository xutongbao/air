import { useState, useEffect } from 'react'
import Api from '../../../../../api'
import { Modal, Form } from 'antd'
import { getProcessList } from '../../../../../store/light/actionCreator'


const { confirm } = Modal

export default function useList(props) {
  const [form] = Form.useForm()
  //控制对话框显示和隐藏
  const [isModalVisible, setIsModalVisible] = useState(false)
  //添加表单默认值
  const [initValues, setInitValues] = useState({})
  const [type, setType] = useState('add')
  const [modalTitle, setModalTitle] = useState()
  const { appList } = props

  const addInitValues = {}

  //搜索
  const handleSearch = () => {
    props.onDispatch(getProcessList())
  }

  //删除
  const handleDelete = (id) => {
    console.log('删除, id:', id)
    confirm({
      title: '确认要删除吗？',
      onOk() {
        Api.light.processListDelete({ ids: [id] }).then((res) => {
          if (res.code === 200) {
            props.onDispatch(getProcessList())
          }
        })
      },
    })
  }

  //显示添加对话框
  const handleAdd = () => {
    setType('add')
    setModalTitle('添加应用')
    setInitValues(addInitValues)
    console.log(addInitValues)
    setIsModalVisible(true)
  }

  //显示编辑对话框
  const handleEdit = (id) => {
    const record = appList.find(item => item.id === id)
    console.log('编辑, id:', record)
    setType('edit')
    setModalTitle('修改名称')
    setInitValues({ ...initValues, ...record })
    setIsModalVisible(true)
  }

  //添加或编辑
  const handleFinish = (values) => {
    console.log('Success:', values)
    if (type === 'add') {
      values.path = '/light/index/content'
      Api.light.processListAdd({ dataItem: values }).then((res) => {
        if (res.code === 200) {
          setIsModalVisible(false)
          handleSearch()
        }
      })
    } else if (type === 'edit') {
      Api.light
        .processListEdit({
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

  //跳转到应用设置页面
  const handleJumpToSet = (id) => {
    props.history.push(`/light/admin/processOld?type=detail&id=${id}&progress=edit`)
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
    isModalVisible,
    initValues,
    type,
    form,
    modalTitle,
    handleDelete,
    handleAdd,
    handleEdit,
    setIsModalVisible,
    handleFinish,
    handleFinishFailed,
    handleJumpToSet,
  }
}
