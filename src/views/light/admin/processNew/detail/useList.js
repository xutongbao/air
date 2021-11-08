import { useState, useEffect } from 'react'
import Api from '../../../../../api'
import { Modal, Form } from 'antd'
import {
  deepClone,
  formatCategoryForList,
  getMyAuth,
} from '../../../../../utils/tools'

const { confirm } = Modal

export default function useList(props) {
  const [dataSource, setDataSource] = useState([])
  const [form] = Form.useForm()
  //控制对话框显示和隐藏
  const [isModalVisible, setIsModalVisible] = useState(false)
  //添加表单默认值
  const [initValues, setInitValues] = useState({})
  const [type, setType] = useState('add')
  const [treeData, setTreeData] = useState([])
  const [modalTitle, setModalTitle] = useState()
  //权限
  const [myAuthObj, setMyAuthObj] = useState({})

  let addInitValues = {}
  if (process.env.REACT_APP_MODE === 'dev') {
    addInitValues = {
      // 分类名称
      name: '测试',
      // 首字母
      initalLetter: 'A',
      // 所属分类
      parentid: 0,
      // 备注
      remark: '备注1',
      // 排序值
      order: 0,
    }
  } else {
    addInitValues = {}
  }

  //搜索
  const handleSearch = () => {
    Api.light.categroySearch().then((res) => {
      if (res.state === 1) {
        setDataSource(formatCategoryForList({ categoryOptions: res.data }))
      }
    })
  }

  //删除
  const handleDelete = (record) => {
    console.log('删除, id:', record.id)
    confirm({
      title: '该分类及子分类都会被删除，确认要删除吗？',
      onOk() {
        Api.light.categroyDelete({ ids: [record.id] }).then((res) => {
          if (res.state === 1) {
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
    setModalTitle('添加分类')
    setIsModalVisible(true)
    getTreeData()
  }

  //显示增加子类对话框
  const handleAddChild = (record) => {
    setType('add')
    setInitValues({ addInitValues })
    console.log(addInitValues)
    setModalTitle('新增子类')
    setIsModalVisible(true)
    getTreeData()
  }

  //显示编辑对话框
  const handleEdit = (record) => {
    console.log('编辑, id:', record)
    setType('edit')
    setInitValues({ ...initValues, ...record })
    setModalTitle('编辑分类')
    setIsModalVisible(true)
    getTreeData()
  }

  //添加或编辑
  const handleFinish = (values) => {
    console.log('Success:', values)
    if (type === 'add') {
      Api.light.categroyAdd({ ...values }).then((res) => {
        if (res.state === 1) {
          setIsModalVisible(false)
          handleSearch()
        }
      })
    } else if (type === 'edit') {
      Api.light
        .categroyEdit({
          id: initValues.id,
          ...values,
        })
        .then((res) => {
          if (res.state === 1) {
            setIsModalVisible(false)
            handleSearch()
          }
        })
    }
  }

  const handleStatus = (record) => {
    confirm({
      title: `确认要${record.status === 3 ? '禁用' : '开启'}吗？`,
      onOk() {
        if (record.status === 3) {
          Api.light
            .categoryClose({
              id: record.id,
              userId: localStorage.getItem('userIdForAdmin'),
            })
            .then((res) => {
              if (res.state === 1) {
                handleSearch()
              }
            })
        } else {
          Api.light
            .categoryOpen({
              id: record.id,
              userId: localStorage.getItem('userIdForAdmin'),
            })
            .then((res) => {
              if (res.state === 1) {
                handleSearch()
              }
            })
        }
      },
    })
  }

  //校验失败
  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const getTreeData = (id) => {
    const treeData = deepClone(dataSource)
    //编辑时，禁止把所属分类选择为自己以及自己的children
    const fromatFun = (arr, disabled = false) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].title = arr[i].name
        arr[i].value = arr[i].id
        arr[i].disabled = disabled || arr[i].id === id
        if (arr[i].children) {
          fromatFun(arr[i].children, arr[i].disabled)
        }
      }
    }
    fromatFun(treeData)
    treeData.unshift({
      title: '一级分类',
      value: '0',
    })
    setTreeData(treeData)
  }

  //挂载完
  useEffect(() => {
    handleSearch()
  }, [])

  useEffect(() => {
    form.resetFields()
  }, [isModalVisible, form])

  //权限
  useEffect(() => {
    const myAuthObj = {
      add: true,
    }
    setMyAuthObj(myAuthObj)
  }, [])

  return {
    dataSource,
    treeData,
    isModalVisible,
    initValues,
    type,
    form,
    modalTitle,
    myAuthObj,
    handleSearch,
    handleDelete,
    handleAdd,
    handleEdit,
    handleAddChild,
    setIsModalVisible,
    handleFinish,
    handleFinishFailed,
    handleStatus,
  }
}
