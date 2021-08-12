import { useState, useEffect } from 'react'
import Api from '../../../api'
import { Modal, Form } from 'antd'
import { getRouterSearchObj } from '../../../utils/tools'
import useFields from './useFields'

const { confirm } = Modal

export default function useList(props) {
  const [total, setTotal] = useState()
  const [current, setCurrent] = useState(1)
  //把dataSource和pageSize单独放在一起是为了避免切换pageSize时的bug
  const [state, setState] = useState({
    columns: [],
    dataSource: [],
    pageSize: 10,
  })
  const [form] = Form.useForm()
  //控制对话框显示和隐藏
  const [isModalVisible, setIsModalVisible] = useState(false)
  //添加表单默认值
  const [initValues, setInitValues] = useState({})
  const [type, setType] = useState('add')
  const [modalTitle, setModalTitle] = useState()
  const [modalFields, setModalFields] = useState([])
  const { getColumns, getModalFields } = useFields(props)

  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)
  const tableId = routerSearchObj.id - 0

  const addInitValues = {}

  //搜索
  const handleSearch = ({
    page = 1,
    pageSize = state.pageSize,
    searchParams = {},
  } = {}) => {
    Api.light.tableSearch({ tableId, page, pageSize, searchParams }).then((res) => {
      if (res.code === 200) {
        setState({
          columns: getColumns(res.data.fields),
          dataSource: res.data.list,
          pageSize: res.data.pageSize,
        })
        setModalFields(getModalFields(res.data.fields))
        setTotal(res.data.total)
        setCurrent(res.data.current)
      }
    })
  }

  //删除
  const handleDelete = (record) => {
    console.log('删除, id:', record.id)
    confirm({
      title: '确认要删除吗？',
      onOk() {
        Api.light.tableDelete({ tableId, ids: [record.id] }).then((res) => {
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
    setModalTitle('添加')
    setIsModalVisible(true)
  }

  //显示编辑对话框
  const handleEdit = (record) => {
    console.log('编辑, id:', record)
    setType('edit')
    setInitValues({ ...initValues, ...record })
    setModalTitle('编辑')
    setIsModalVisible(true)
  }

  //添加或编辑
  const handleFinish = (values) => {
    console.log('Success:', values)
    if (type === 'add') {
      Api.light.tableAdd({ tableId, dataItem: values }).then((res) => {
        if (res.code === 200) {
          setIsModalVisible(false)
          handleSearch()
        }
      })
    } else if (type === 'edit') {
      Api.light
        .tableEdit({
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
    setModalTitle('查看')
    setIsModalVisible(true)
  }

  //挂载完执行，切换路由时，search会变化，也会执行
  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line 
  }, [props.location.search])

  useEffect(() => {
    form.resetFields()
  }, [isModalVisible, form])

  return {
    dataSource: state.dataSource,
    total,
    current,
    pageSize: state.pageSize,
    columns: state.columns,
    isModalVisible,
    initValues,
    type,
    form,
    modalTitle,
    modalFields,
    handleSearch,
    handleDelete,
    handleAdd,
    handleEdit,
    handleCheck,
    setIsModalVisible,
    handleFinish,
    handleFinishFailed,
  }
}
