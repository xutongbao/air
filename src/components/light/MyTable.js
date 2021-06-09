import React from 'react'
import { Table } from 'antd'

function MyTable(props) {
  const { dataSource, total, current, pageSize, getColumns } = props

  return (
    <div className="m-content-table">
      <Table
        className="m-my-table"
        columns={getColumns(props)}
        dataSource={dataSource}
        rowKey="id"
        scroll={{ scrollToFirstRowOnChange: true, x: true }}
        rowSelection={{
          onChange: (selectedRowKeys, selectedRows) =>
            props.onRowSelect(selectedRowKeys, selectedRows),
        }}
        pagination={{
          current,
          total,
          pageSize,
          onChange: (page, pageSize) => props.onSearch({page, pageSize}),
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 50],
          onShowSizeChange: (page, pageSize) => props.onSearch({page, pageSize}),
          showTotal: (total) => <span>共有数据： <span className="m-total-text">{total}</span> 条</span>,
        }}
      ></Table>
    </div>
  )
}

export default MyTable
