import { Modal, message } from 'antd'
import { useState } from 'react'

const { confirm } = Modal

export default function useOperate() {

  const [selectedIds, setSelectedIds] = useState([])

  //行选择
  const handleRowSelect = (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys, selectedRows)
    setSelectedIds(selectedRowKeys)
  }

  //按钮操作
  const handleOperate = ({ type }) => {
    if (selectedIds.length === 0) {
      message.warning('请至少选择一项')
    } else if (type === 0) {
      confirm({
        title: '确认要批量提交百度审核吗?',
        onOk() {
          console.log(selectedIds)
        },
      })
    }
  }

  return {
    handleRowSelect,
    handleOperate,
  }
}
