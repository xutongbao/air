import { useState, useEffect } from 'react'
import Api from '../../../../api'
import { Modal, Form } from 'antd'

const { confirm } = Modal

export default function useList(props) {
  const [total, setTotal] = useState()
  const [current, setCurrent] = useState(1)
  //把dataSource和pageSize单独放在一起是为了避免切换pageSize时的bug
  const [state, setState] = useState({
    dataSource: [],
    pageSize: 10,
  })
  const [form] = Form.useForm()
  // 搜索表单
  const [searchForm] = Form.useForm()
  //控制对话框显示和隐藏
  const [isModalVisible, setIsModalVisible] = useState(false)
  //添加表单默认值
  const [initValues, setInitValues] = useState({})
  const [type, setType] = useState('add')
  const [modalTitle, setModalTitle] = useState()
  const {
    location: { search },
  } = props

  //初始值
  let addInitValues = {}
  if (process.env.REACT_APP_MODE === 'dev') {
    addInitValues = {}
  } else {
    addInitValues = {}
  }

  //搜索
  const handleSearch = ({
    page = current,
    pageSize = state.pageSize,
  } = {}) => {
    const searchParams = {
      ...searchForm.getFieldsValue(),
    }
    searchParams.name = searchParams.searchName
    delete searchParams.searchName
    Api.light
      .templateSearch({ pageNum: page, pageSize, ...searchParams })
      .then((res) => {
        if (res.state === 1) {
          setState({
            dataSource: res.data.list,
            pageSize: res.data.pageSize,
          })
          setTotal(res.data.totalCount)
          setCurrent(res.data.pageNum)
        }
      })
  }

  //删除
  const handleDelete = (record) => {
    console.log('删除, id:', record.id)
    confirm({
      title: '确认要删除吗？',
      onOk() {
        Api.light.templateDelete({ ids: [record.id] }).then((res) => {
          if (res.state === 1) {
            handleSearch({ page: current })
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
    setModalTitle('添加')
    setIsModalVisible(true)
  }

  //编辑和查看时处理数据格式
  const getEditTemp = (record) => {
    // 编辑数据字段格式转换
    let editTemp = {}
    return editTemp
  }   

  //显示编辑对话框
  const handleEdit = (record) => {
    console.log('编辑, id:', record)
    setType('edit')
    setInitValues({ ...initValues, ...record, ...getEditTemp(record) })
    setModalTitle('编辑')
    setIsModalVisible(true)
  }

  //查看
  const handleCheck = (record) => {
    setType('check')
    setInitValues({ ...initValues, ...record, ...getEditTemp(record) })
    setModalTitle('查看')
    setIsModalVisible(true)
  }  

  //添加或编辑
  const handleFinish = (values) => {
    console.log('Success:', values)
    if (type === 'add') {
      Api.light.templateAdd({ dataItem: values }).then((res) => {
        if (res.state === 1) {
          setIsModalVisible(false)
          handleSearch()
        }
      })
    } else if (type === 'edit') {
      Api.light
        .templateEdit({
          id: initValues.id,
          dataItem: { ...initValues, ...values },
        })
        .then((res) => {
          if (res.state === 1) {
            setIsModalVisible(false)
            handleSearch({ page: current })
          }
        })
    }
  }

  //校验失败
  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  //操作
  const handleAction = ({ type, record }) => {
    if (type === 'up') {
      confirm({
        title: `确认要${record.isUp === 1 ? '下架' : '上架'}吗？`,
        onOk() {
          Api.light
            .templateUp({ id: record.id, isUp: record.isUp === 1 ? 0 : 1 })
            .then((res) => {
              if (res.state === 1) {
                handleSearch({ page: current })
              }
            })
        },
      })
    }
  }

  // 挂载完请求第一页数据，路由里有查询条件会自动带上。再次点击菜单时，查询条件会消失，会再次请求数据
  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line
  }, [props.location.search])

  // 每次打开对话框时要重置一下表单，防止表单记忆上一次的值，添加、编辑、查看共用一个表单
  useEffect(() => {
    form.resetFields()
  }, [isModalVisible, form])

  // 路由查询条件变化时，重置搜索表单
  useEffect(() => {
    searchForm.resetFields()
  }, [search, searchForm])

  useEffect(() => {
    document.title = '管理系统'
  }, [])


  return {
    dataSource: state.dataSource,
    total,
    current,
    pageSize: state.pageSize,
    isModalVisible,
    initValues,
    type,
    form,
    searchForm,
    modalTitle,
    handleSearch,
    handleDelete,
    handleAdd,
    handleEdit,
    handleCheck,
    setIsModalVisible,
    handleFinish,
    handleFinishFailed,
    handleAction,
  }
}
