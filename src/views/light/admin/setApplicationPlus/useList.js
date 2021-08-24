import { useState, useEffect } from 'react'
import Api from '../../../../api'
import { Modal, Form, message } from 'antd'
import { getRouterSearchObj } from '../../../../utils/tools'
import { v4 as uuidv4 } from 'uuid'
import { getComponentArr } from './config'

const { confirm } = Modal

let currentDataSource = []
export default function useList(props) {
  const [form] = Form.useForm()
  const [formForAttr] = Form.useForm()
  const [dataSource, setDataSource] = useState([])
  const [applicationTitle, setApplicationTitle] = useState()
  const [cardActiveId, setCardActiveId] = useState()
  const [initValuesForAttr, setInitValuesForAttr] = useState({})

  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)
  const tableId = routerSearchObj.id

  const addInitValues = {}

  //搜索
  const handleSearch = () => {
    Api.light.fieldsSearch({ tableId }).then((res) => {
      if (res.code === 200) {
        let tempDataSource = res.data.fields.filter((item) => !item.isSystem)
        setDataSource(tempDataSource)
        setApplicationTitle(res.data.title)
        if (Array.isArray(tempDataSource) && tempDataSource.length > 0) {
          handleCardActiveId({
            id: tempDataSource[0].id,
            myDataSource: tempDataSource,
          })
        }
      }
    })
  }

  //点击时按钮，添加新字段
  const handleAdd = ({ fieldInfo }) => {
    const orderIndexArr = currentDataSource.map((item) => item.orderIndex)
    const orderIndex = Math.max.apply(Math, orderIndexArr) + 1
    const id = uuidv4()
    let tempValues = {
      id,
      dataIndex: `${fieldInfo.dataIndex}-${id}`,
      isColumn: true,
      isModalField: true,
      orderIndex,
    }
    console.log({ ...fieldInfo, ...tempValues })
    console.log(currentDataSource)
    const tempDataSource = [
      ...currentDataSource,
      { ...fieldInfo, ...tempValues },
    ]
    setDataSource(tempDataSource)
    if (Array.isArray(tempDataSource) && tempDataSource.length > 0) {
      handleCardActiveId({
        id,
        myDataSource: tempDataSource,
      })
    }
  }

  //保存
  const handleSave = () => {
    console.log(dataSource)
    const newDataSource = dataSource.map((item, index) => {
      return { ...item, orderIndex: index + 1 }
    })
    console.log(newDataSource)
    Api.light
      .fieldsEditAll({ tableId, dataItem: newDataSource })
      .then((res) => {
        if (res.code === 200) {
          message.success(res.message)
        }
      })
  }

  //删除
  const handleDelete = (e, record) => {
    e.stopPropagation()
    console.log('删除, id:', record.id)
    confirm({
      title: '确认要删除吗？',
      onOk() {
        const tempDataSource = dataSource.filter(
          (item) => item.id !== record.id
        )
        setDataSource(tempDataSource)
        if (Array.isArray(tempDataSource) && tempDataSource.length > 0) {
          if (record.id === cardActiveId) {
            handleCardActiveId({
              id: tempDataSource[0].id,
              myDataSource: tempDataSource,
            })
          }
        } else {
          setCardActiveId(false)
        }
      },
    })
  }

  //提交按钮
  const handleFinish = (values) => {
    console.log('Success:', values)
  }

  //校验失败
  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  //设置当前card
  const handleCardActiveId = ({ id, myDataSource = dataSource }) => {
    setCardActiveId(id)
    let currentItem = myDataSource.find((item) => item.id === id)
    let rules =
      Array.isArray(currentItem.rules) && currentItem.rules.length > 0
        ? currentItem.rules[0]
        : {
            message: `${currentItem.title}不能为空`,
          }
    setInitValuesForAttr({ ...currentItem, rules })
  }

  //修改表单字段属性
  const handleValuesChange = (changedValues, allValues) => {
    const temp = formForAttr.getFieldsValue()
    console.log(temp)
    const cardActiveIndex = dataSource.findIndex(
      (item) => item.id === cardActiveId
    )

    let tempValues = {
      rules: [allValues.rules],
      props: {
        placeholder: allValues.placeholder,
      },
      //src: 'https://jsformimages.biaodan.info/611f6c2afc918f46dd5ee186.jpg'
    }

    dataSource[cardActiveIndex] = {
      ...dataSource[cardActiveIndex],
      ...allValues,
      ...tempValues,
    }
    setDataSource([...dataSource])
  }

  //拖拽处理函数
  const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult
    if (removedIndex === null && addedIndex === null) return arr

    const result = [...arr]
    let itemToAdd = payload

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0]
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd)
    }

    return result
  }

  //获取拖拽元素的值
  const handleGetChildPayload = ({ type, index }) => {
    if (type === 'tool') {
      const id = uuidv4()
      const tempList = getComponentArr()
      const orderIndexArr = currentDataSource.map((item) => item.orderIndex)
      const orderIndex = Math.max.apply(Math, orderIndexArr) + 1
      const fieldInfo = tempList[index]
      let tempValues = {
        id,
        dataIndex: `${fieldInfo.dataIndex}-${id}`,
        isColumn: true,
        isModalField: true,
        orderIndex,
      }
      return { ...fieldInfo, ...tempValues }
    } else if (type === 'content') {
      return dataSource[index]
    }
  }

  //拖拽结束时修改数据状态
  const handleCardDrop = ({ type, dragResult }) => {
    if (type === 'tool') {
    } else if (type === 'content') {
      const tempDataSource = applyDrag(dataSource, dragResult)
      setDataSource(tempDataSource)
      if (Array.isArray(tempDataSource) && tempDataSource.length > 0) {
        handleCardActiveId({
          id: dragResult.payload.id,
          myDataSource: tempDataSource,
        })
      }
    }
  }

  useEffect(() => {
    formForAttr.resetFields()
    // eslint-disable-next-line
  }, [initValuesForAttr])

  //挂载完
  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line
  }, [])

  //dataSource更新，同步更新currentDataSource,handleAdd函数中dataSource的值为空数组，这是一个bug
  useEffect(() => {
    currentDataSource = dataSource
  }, [dataSource])

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
    handleDelete,
    handleFinish,
    handleFinishFailed,
    handleAdd,
    handleSave,
    handleCardActiveId,
    handleValuesChange,
    handleGetChildPayload,
    handleCardDrop,
  }
}
