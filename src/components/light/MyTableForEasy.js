import React from 'react'
import { Table } from 'antd'

function MyTableForEasy(props) {
  const { dataSource, getColumns, defaultExpandAllRows = false } = props

  return (
    <div className="m-content-table">
      <Table
        className="m-my-table"
        columns={getColumns(props)}
        dataSource={dataSource}
        rowKey="id"
        scroll={{ scrollToFirstRowOnChange: true, x: true }}
        expandable={{ defaultExpandAllRows: true }}
        pagination={{
          showTotal: (total) => (
            <span>
              共有数据： <span className="m-total-text">{total}</span> 条
            </span>
          ),
        }}
        //pagination={false}
      ></Table>
    </div>
  )
}

export default MyTableForEasy
