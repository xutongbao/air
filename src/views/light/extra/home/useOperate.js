import { Modal, message } from 'antd'
import { useState } from 'react'
import Api from '../../../../api'

const { confirm } = Modal

export default function useOperate({ onSearch }) {

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
        title: '确认要批量删除吗?',
        onOk() {
          console.log(selectedIds)
          Api.light.jenkinsDelete({ ids: selectedIds }).then((res) => {
            if (res.state === 1) {
              onSearch()
            }
          })
        },
      })
    }
  }

  return {
    handleRowSelect,
    handleOperate,
  }
}
