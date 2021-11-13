import React from 'react'
import { Button, Space } from 'antd'

export default function TreeCard(props) {
  const { title, children, color = 'blue', item } = props
  return (
    <div className={`m-tree-card ${color}`}>
      <div className={`m-tree-card-header ${color}`}>{title}</div>
      <div className="m-tree-card-content">
        <div className="m-tree-card-content-text" title={children}>{children}</div>
        <div style={{ textAlign: 'center' }}>
          <Space>
            <Button size="small" onClick={() => props.onAddChild(item)}>
              添加
            </Button>
            <Button size="small" onClick={() => props.onDelete(item)}>
              删除
            </Button>
            <Button size="small" onClick={() => props.onEdit(item)}>
              编辑
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
