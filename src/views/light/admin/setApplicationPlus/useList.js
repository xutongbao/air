import { useState, useEffect } from 'react'
import Api from '../../../../api'
import { Modal } from 'antd'
import { getRouterSearchObj } from '../../../../utils/tools'

const { confirm } = Modal

export default function useList(props) {
  const [dataSource, setDataSource] = useState([])
  const [applicationTitle, setApplicationTitle] = useState()

  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)
  const tableId = routerSearchObj.id - 0

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
  
  //挂载完
  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line 
  }, [])

  return {
    dataSource,
    applicationTitle,
    handleSearch,
    handleDelete,
  }
}
