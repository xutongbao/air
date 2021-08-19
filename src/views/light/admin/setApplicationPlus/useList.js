import { useState, useEffect, useCallback } from 'react'
import Api from '../../../../api'
import { Modal, Form, message } from 'antd'
import update from 'immutability-helper'
import { getRouterSearchObj } from '../../../../utils/tools'

const { confirm } = Modal

export default function useList(props) {
  const [form] = Form.useForm()
  const [formForAttr] = Form.useForm()
  const [dataSource, setDataSource] = useState([])
  const [applicationTitle, setApplicationTitle] = useState()
  const [cardActiveId, setCardActiveId] = useState()
  const [initValuesForAttr, setInitValuesForAttr] = useState({})

  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)
  const tableId = routerSearchObj.id - 0

  const addInitValues = {}

  //搜索
  const handleSearch = () => {
    Api.light.fieldsSearch({ tableId }).then((res) => {
      if (res.code === 200) {
        const tempDataSource = res.data.fields.filter((item) => !item.isSystem)
        setDataSource(tempDataSource)
        setApplicationTitle(res.data.title)
        if(Array.isArray(tempDataSource) && tempDataSource.length > 0) {
          setCardActiveId(tempDataSource[0].id)
          setInitValuesForAttr(tempDataSource[0])
          formForAttr.resetFields()
        }
      }
    })
  }

  //拖动改变顺序
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = dataSource[dragIndex]
      setDataSource(
        update(dataSource, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      )
    },
    [dataSource]
  )

  const handleSave = () => {
    const newDataSource = dataSource.map((item, index) => {
      return { ...item, orderIndex: index + 1 }
    })
    console.log(newDataSource)
    Api.light.fieldsEditAll({ tableId, dataItem: newDataSource }).then(res => {
      if (res.code === 200) {
        message.success(res.message)
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

  //添加或编辑
  const handleFinish = (values) => {
    console.log('Success:', values)
  }

  //校验失败
  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const handleCardActiveId = (id) => {
    setCardActiveId(id)
    const currentItem = dataSource.find(item => item.id === id)
    setInitValuesForAttr(currentItem)
    formForAttr.resetFields()
  }

  //挂载完
  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line
  }, [])

  return {
    form,
    formForAttr,
    initValuesForAttr,
    dataSource,
    applicationTitle,
    addInitValues,
    tableId,
    cardActiveId,
    handleSearch,
    moveCard,
    handleDelete,
    handleFinish,
    handleFinishFailed,
    handleSave,
    handleCardActiveId,
  }
}
