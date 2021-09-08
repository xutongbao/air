import { useState, useEffect } from 'react'
import Api from '../../../../../../api'
import { message } from 'antd'
import { getRouterSearchObj } from '../../../../../../utils/tools'

export default function useList(props) {
  const [dataSource, setDataSource] = useState([])
  const [applicationTitle, setApplicationTitle] = useState()
  const [skin, setSkin] = useState({})

  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)
  const tableId = routerSearchObj.id

  //搜索
  const handleSearch = () => {
    Api.light.fieldsSearch({ tableId }).then((res) => {
      if (res.code === 200) {
        let tempDataSource = res.data.fields.filter((item) => !item.isSystem)
        setDataSource(tempDataSource)
        setApplicationTitle(res.data.title)
        setSkin(res.data.skin ? res.data.skin : {})
      }
    })
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

  //挂载完
  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line
  }, [])

  return {
    applicationTitle,
    routerSearchObj,
    skin,
    handleSave,
  }
}
